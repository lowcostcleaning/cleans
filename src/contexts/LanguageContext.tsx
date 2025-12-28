import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    subtitle: "Operating system for property & service workflows",
    description: "CleanOS unites cleaning, short-term rental management, and property investment workflows in one system.",
    cta: "Enter CleanOS Clean (beta)",
    activeModule: "CleanOS Clean — active module",
    cleanDesc: "Cleaning calendar and workflows for property managers and cleaners",
    stayDesc: "Short-term rental management with automatic cleaning workflows",
    investDesc: "Property investment marketplace with management handover",
    active: "Active (beta)",
    coming: "Coming soon",
    footer: "© CleanOS. Platform in active development.",
  },
  ru: {
    subtitle: "Операционная система для управления недвижимостью и сервисами",
    description: "CleanOS объединяет уборку, управление краткосрочной арендой и инвестиции в недвижимость в одной системе.",
    cta: "Войти в CleanOS Clean (beta)",
    activeModule: "CleanOS Clean — активный модуль",
    cleanDesc: "Календарь уборок и рабочие процессы для управляющих и клинеров",
    stayDesc: "Управление краткосрочной арендой с автоматическими процессами уборки",
    investDesc: "Маркетплейс инвестиций в недвижимость с передачей управления",
    active: "Активен (beta)",
    coming: "Скоро",
    footer: "© CleanOS. Платформа в активной разработке.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
