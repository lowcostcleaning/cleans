import { Button } from "@/components/ui/button";
import ModuleCard from "@/components/ModuleCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const modules = [
    {
      name: "Clean",
      description: "Cleaning calendar and workflows for property managers and cleaners",
      status: "active" as const,
    },
    {
      name: "Stay",
      description: "Short-term rental management with automatic cleaning workflows",
      status: "coming" as const,
    },
    {
      name: "Invest",
      description: "Property investment marketplace with management handover",
      status: "coming" as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Logo / Title */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
            CleanOS
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
            Operating system for property & service workflows
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
            CleanOS unites cleaning, short-term rental management, and property investment workflows in one system.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a href="https://app.cleanos.space/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Enter CleanOS Clean (beta)
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <span className="text-sm text-muted-foreground">
              CleanOS Clean — active module
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
                description={module.description}
                status={module.status}
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
            © CleanOS. Platform in active development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;