/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      /* ── Colors — all reference CSS vars defined in globals.css ── */
      colors: {
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Design system brand shortcuts */
        brand: {
          DEFAULT: "hsl(var(--ds-brand-primary))",
          light:   "hsl(var(--ds-brand-primary-light))",
          dark:    "hsl(var(--ds-brand-primary-dark))",
        },
      },

      /* ── Border radius — mirrors CSS var scale ── */
      borderRadius: {
        sm:   "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg:   "var(--radius-lg)",
        xl:   "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      
      boxShadow: {
        'ds-custom': 'var(--ds-custom-shadow)',
      },

      /* ── Font families ── */
      fontFamily: {
        sans:    ["var(--ds-font-primary)", "system-ui", "sans-serif"],
        display: ["var(--ds-font-display)", "system-ui", "sans-serif"],
      },

      /* ── Spacing extras ── */
      spacing: {
        "nav": "var(--ds-nav-height)",
      },

      /* ── Keyframes & animations ── */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.93)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%":   { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--ds-brand-primary) / 0.35)" },
          "50%":      { boxShadow: "0 0 50px hsl(var(--ds-brand-primary) / 0.7)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-up":         "fade-up 0.6s ease-out both",
        "fade-in":         "fade-in 0.4s ease-out both",
        "scale-in":        "scale-in 0.4s ease-out both",
        "slide-in-left":   "slide-in-left 0.5s ease-out both",
        "slide-in-right":  "slide-in-right 0.5s ease-out both",
        "float":           "float 3s ease-in-out infinite",
        "glow-pulse":      "glow-pulse 2.5s ease-in-out infinite",
        "shimmer":         "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

