import { Play, Users, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dubai.jpg";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(40 20% 98%) 0%, hsl(173 40% 94%) 40%, hsl(40 15% 96%) 70%, hsl(80 20% 94%) 100%)`
      }}
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-trust/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nature/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pattern-subtle opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4 text-trust" />
                <span className="font-medium">2500+ учеников</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-trust" />
                <span className="font-medium">8 лет опыта</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
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

          {/* Right Column - Image */}
          <div className="relative">
            {/* Decorative blur */}
            <div className="absolute -inset-4 bg-trust/20 rounded-3xl blur-3xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-border/50">
              <img
                src={heroImage}
                alt="Дети в языковом лагере"
                className="w-full object-cover aspect-[4/3] md:aspect-[4/5]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
