import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: t(translations.nav.about), href: "#about" },
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.testimonials), href: "#testimonials" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Workplace Mediation" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Workplace Mediation
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            isHome ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={"/" + link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={toggle}
            className="text-sm font-semibold px-3 py-1.5 rounded-full border border-border hover:bg-card transition-colors duration-200 active:scale-[0.97]"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm font-semibold px-3 py-1.5 rounded-full border border-border"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : "/" + link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
