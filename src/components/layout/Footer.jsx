import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const SITE_NAME = "Joo Manasseh";
const SITE_TAGLINE = "Building great things on the web.";
const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
    {
        heading: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
        ],
     },
     {
        heading: "Resources",
        links: [
            { label: "Documentation", href: "/docs" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
     },
     {
        heading: "Contact",
        links: [
            { label: "Get in Touch", href: "/contact" },
            { label: "Support", href: "/support" },
        ],
     },
];

const SOCIAL_LINKS = [
    { icon: FaGithub, href: "https://github.com", label: "Github" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter/X" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "Linkedin" },
    { icon: FaEnvelope, href: "mailto:maphadathrowmhijoo@gmail.com", label: "Email" },    
];

export default function Footer () {
	return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-ds py-16 md:py-20">

        {/* ── Top row: brand + columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="text-xl font-bold font-display text-gradient w-fit"
            >
              {SITE_NAME}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {SITE_TAGLINE}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center
                             text-muted-foreground hover:text-primary hover:bg-primary/10
                             transition-colors duration-200 focus-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">{col.heading}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary
                                 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}