import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Imprint = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            {t(translations.imprint.title)}
          </h1>
          <div
            className="prose prose-neutral max-w-none [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{
              __html: t(translations.imprint.content),
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
