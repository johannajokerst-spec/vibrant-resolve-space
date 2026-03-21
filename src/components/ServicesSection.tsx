import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";
import { Handshake, MessageCircle, Scale } from "lucide-react";

const icons = [
  <Handshake className="w-7 h-7 text-gold" />,
  <MessageCircle className="w-7 h-7 text-coral" />,
  <Scale className="w-7 h-7 text-lavender" />,
];

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    translations.services.consultation,
    translations.services.mediation,
    translations.services.chairperson,
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-card scroll-mt-20">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t(translations.services.sectionLabel)}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
            {t(translations.services.sectionLabel)}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {icons[i]}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t(service.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {t(service.desc)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
