import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";
import stageImg from "@/assets/johanna-stage.png";
import panelImg from "@/assets/johanna-panel.jpeg";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t(translations.about.sectionLabel)}
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-balance">
            {t(translations.about.title)}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-5">
            <ScrollReveal delay={100}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {t(translations.about.p1)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {t(translations.about.p2)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={260}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {t(translations.about.p3)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={340}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {t(translations.about.p4)}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal direction="right" delay={150}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={stageImg}
                  alt="Johanna speaking on stage"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={250}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={panelImg}
                  alt="Johanna on a conference panel"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
