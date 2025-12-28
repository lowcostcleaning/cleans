import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="glass-card flex rounded-full p-1 gap-1">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === "en"
              ? "bg-primary text-primary-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("ru")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === "ru"
              ? "bg-primary text-primary-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
