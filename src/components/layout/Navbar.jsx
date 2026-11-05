import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button.tsx";
import { ThemeToggle } from "../layout/ThemeToggle.tsx";
import { cn } from "../../lib/utils.ts";

/* ──────────────────────────────────────────────────────────────
   EDIT: your navigation items
   ────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

/* EDIT: CTA button in nav */
const NAV_CTA = { label: "Get in Touch", href: "/contact" };

/* EDIT: your site name / logo text */
const SITE_NAME = "Joo Manasseh";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href) => {
    // Split the href into path and hash parts
    const [path, hashPart] = href.split("#");

    // If the link has a hash (e.g., "/#about")
    if (hashPart) {
      return pathname === path && hash === `#${hashPart}`;
    }

    // For plain paths (e.g., "/" or "/contact")
    if (path === "/") {
      return pathname === "/" && !hash;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={cn(
          "nav-base",
          scrolled ? "nav-scrolled" : "bg-transparent"
        )}
      >
        <div className="container-ds flex items-center justify-between h-full">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="text-xl font-bold font-display text-gradient focus-ring rounded-sm"
          >
            {SITE_NAME}
          </Link>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link focus-ring",
                  isActive(link.href) && "nav-link-active"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to={NAV_CTA.href}>
              <Button className="btn-primary btn-sm">{NAV_CTA.label}</Button>
            </Link>
          </div>

          {/* ── Mobile: theme + hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 focus-ring"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile drawer panel ── */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-4/5 max-w-sm",
          "bg-background border-r border-border",
          "flex flex-col pt-6 px-6",
          "transition-transform duration-300 ease-in-out lg:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="text-xl font-bold font-display text-gradient"
            onClick={() => setMenuOpen(false)}
          >
            {SITE_NAME}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-[var(--radius)] text-base font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="pt-6 pb-8 border-t border-border mt-6">
          <Link to={NAV_CTA.href} onClick={() => setMenuOpen(false)}>
            <Button className="btn-primary btn-full">{NAV_CTA.label}</Button>
          </Link>
        </div>
      </div>
    </>
  );
}