import { Play, Users, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dubai.jpg";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-trust-light text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Лето 2025 — набор открыт!
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ЯЗЫКОВОЙ ЛАГЕРЬ{" "}
              <span className="text-trust">В БОРОВОМ</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg">
              Lingvo Camp — международный языковой лагерь для детей от 8 до 15 лет с полным погружением в английскую среду, авторской образовательной программой и насыщенной культурной программой в Боровом.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="w-4 h-4 text-trust" />
                <span className="font-medium">2500+ учеников</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Award className="w-4 h-4 text-trust" />
                <span className="font-medium">8 лет опыта</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Star className="w-4 h-4 text-trust" />
                <span className="font-medium">4.9 рейтинг</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToApply}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                Забронировать место
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-muted transition-colors">
                <Play className="w-5 h-5" />
                Смотреть видео
              </button>
            </div>
          </div>

          {/* Right Column - Image with floating cards */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Дети в языковом лагере"
              className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[3/4]"
            />

            {/* Floating card - Dubai */}
            <div className="absolute top-6 -left-4 bg-background rounded-xl shadow-medium px-4 py-3 flex items-center gap-3 animate-float">
              <span className="bg-trust text-trust-foreground text-xs font-bold px-2 py-1 rounded">AE</span>
              <div>
                <p className="text-sm font-semibold text-foreground">Дубай</p>
                <p className="text-xs text-muted-foreground">от 2490$</p>
              </div>
            </div>

            {/* Floating card - Vietnam */}
            <div className="absolute bottom-8 -right-4 bg-background rounded-xl shadow-medium px-4 py-3 flex items-center gap-3 animate-float-delayed">
              <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">VN</span>
              <div>
                <p className="text-sm font-semibold text-foreground">Вьетнам</p>
                <p className="text-xs text-muted-foreground">от 1890$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
