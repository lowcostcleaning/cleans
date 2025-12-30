import { Button } from "@/components/ui/button";
import ModuleCard from "@/components/ModuleCard";
import LanguageToggle from "@/components/LanguageToggle";
import Snowfall from "@/components/Snowfall";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const modules = [
    {
      name: "Clean",
      descriptionKey: "cleanDesc",
      status: "active" as const,
      statusKey: "active",
    },
    {
      name: "Stay",
      descriptionKey: "stayDesc",
      status: "coming" as const,
      statusKey: "coming",
    },
    {
      name: "Invest",
      descriptionKey: "investDesc",
      status: "coming" as const,
      statusKey: "coming",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Snowfall />
      <LanguageToggle />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Logo / Title */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
            CleanOS
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
            {t("subtitle")}
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
            {t("description")}
          </p>
          
          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a href="https://app.cleanos.space/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                {t("cta")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <span className="text-sm text-muted-foreground">
              {t("activeModule")}
            </span>
          </div>
        </div>
      </main>

      {/* Modules Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.name}
                name={module.name}
                description={t(module.descriptionKey)}
                status={module.status}
                statusLabel={t(module.statusKey)}
                delay={`animate-fade-in-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;