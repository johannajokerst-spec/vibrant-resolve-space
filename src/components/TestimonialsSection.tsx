import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

const accentColors = ["border-l-gold", "border-l-coral", "border-l-lavender"];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t(translations.testimonials.sectionLabel)}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
            {t(translations.testimonials.sectionLabel)}
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {translations.testimonials.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className={`border-l-4 ${accentColors[i]} bg-card rounded-r-xl p-8 md:p-10 shadow-sm`}
              >
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                <blockquote className="text-lg leading-relaxed text-foreground/85 text-pretty italic">
                  "{t(item.quote)}"
                </blockquote>
                <div className="mt-5">
                  <p className="font-semibold text-foreground">{t(item.author)}</p>
                  <p className="text-sm text-muted-foreground">{t(item.role)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
