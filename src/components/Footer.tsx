import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="gradient-bar h-1" />
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {t(translations.footer.copyright)}
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/imprint" className="hover:text-foreground transition-colors">
            {t(translations.nav.imprint)}
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            {t(translations.nav.privacy)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
