import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";
import { Mail } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-card scroll-mt-20">
      <div className="container max-w-2xl text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t(translations.contact.sectionLabel)}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
            {t(translations.contact.sectionLabel)}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t(translations.contact.text)}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            href={`mailto:${translations.contact.email}`}
            className="inline-flex items-center gap-2.5 mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" />
            {translations.contact.email}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
