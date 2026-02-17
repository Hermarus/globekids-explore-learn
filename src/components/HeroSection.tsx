import { Play } from "lucide-react";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.1em] text-foreground mb-6">
          ЯЗЫКОВОЙ ЛАГЕРЬ В БОРОВОМ
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Lingvo Camp — международный языковой лагерь для детей от 8 до 15 лет с полным погружением в английскую среду, авторской образовательной программой и насыщенной культурной программой в Боровом.
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
};

export default HeroSection;
