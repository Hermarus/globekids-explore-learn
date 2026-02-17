import { Play } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<"dubai" | "vietnam" | null>(null);

  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stylistic Tagline */}
        <div className="mb-10">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] uppercase text-foreground">
            LEARNING.
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl heading-stylistic text-muted-foreground mt-1">
            adventure
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.1em] text-foreground mb-6">
          АНГЛИЙСКИЙ ЯЗЫК БЕЗ ГРАНИЦ
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Международные лагеря для детей 7–17 лет в Дубае и Вьетнаме.
        </p>

        {/* Stats - inline with separators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 text-base sm:text-lg">
          <span className="text-foreground font-medium">2500+ учеников</span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="text-foreground font-medium">8 лет опыта</span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="text-foreground font-medium">4.9 рейтинг</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={scrollToApply}
            className="bg-accent text-accent-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-accent-dark transition-colors shadow-glow"
          >
            Оставить заявку
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-foreground hover:text-background transition-colors">
            <Play className="w-5 h-5" />
            Смотреть видео
          </button>
        </div>

        {/* Direction Selector Block */}
        <div className="bg-card rounded-lg p-6 sm:p-8 max-w-2xl mx-auto shadow-soft border border-border">
          <p className="text-sm text-muted-foreground mb-5 uppercase tracking-wider font-medium">
            Выберите направление
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setSelectedDestination("dubai")}
              className={`flex-1 py-4 px-6 rounded text-center transition-all font-medium ${
                selectedDestination === "dubai"
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-border"
              }`}
            >
              <span className="uppercase tracking-wide">ДУБАЙ</span>
              <span className="mx-2">·</span>
              <span>от 24 905₽</span>
            </button>
            <button
              onClick={() => setSelectedDestination("vietnam")}
              className={`flex-1 py-4 px-6 rounded text-center transition-all font-medium ${
                selectedDestination === "vietnam"
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-border"
              }`}
            >
              <span className="uppercase tracking-wide">ВЬЕТНАМ</span>
              <span className="mx-2">·</span>
              <span>от 18 905₽</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
