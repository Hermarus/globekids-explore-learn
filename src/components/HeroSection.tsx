import { Play, Users, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dubai.jpg";
import bgForest from "@/assets/bg-forest.jpg";
import { useLandingContent } from "@/hooks/useLandingContent";

const HeroSection = () => {
  const { getContent } = useLandingContent();

  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgForest})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      {/* Decorative blurred shapes for depth */}
      <div className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'hsl(173 58% 39% / 0.15)' }} />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'hsl(80 25% 45% / 0.12)' }} />
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'hsl(40 30% 70% / 0.2)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-trust-light text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {getContent("hero.tagline", "Лето 2025 — набор открыт!")}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {getContent("hero.title", "ЯЗЫКОВОЙ ЛАГЕРЬ")}{" "}
              <span className="text-trust">{getContent("hero.title_highlight", "В БОРОВОМ")}</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg">
              {getContent("hero.description", "Lingvo Camp — международный языковой лагерь для детей от 8 до 15 лет с полным погружением в английскую среду, авторской образовательной программой и насыщенной культурной программой в Боровом.")}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4 text-trust" />
                <span className="font-medium">{getContent("hero.stat_students", "2500+ учеников")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-trust" />
                <span className="font-medium">{getContent("hero.stat_experience", "8 лет опыта")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-trust" />
                <span className="font-medium">{getContent("hero.stat_rating", "4.9 рейтинг")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToApply}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                {getContent("hero.cta_primary", "Забронировать место")}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-base hover:bg-muted transition-colors">
                <Play className="w-5 h-5" />
                {getContent("hero.cta_secondary", "Смотреть видео")}
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-trust/20 rounded-3xl blur-3xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-border/50">
              <img
                src={heroImage}
                alt="Дети в языковом лагере"
                className="w-full object-cover aspect-[4/3] md:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
