import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";
import headshot from "@/assets/johanna-headshot.jpeg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-coral/6 blur-3xl" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance">
                {translations.hero.title.en.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
                {t(translations.hero.subtitle)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <a
                href="#contact"
                className="inline-flex mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
              >
                {t(translations.hero.cta)}
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative max-w-sm mx-auto md:ml-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/8">
                <img
                  src={headshot}
                  alt="Johanna Jokerst"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-xl bg-gold/20" />
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-lg bg-coral/20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
