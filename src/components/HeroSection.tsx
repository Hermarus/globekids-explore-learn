import { Play, Users, Award, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-camp.jpg";
import bgForest from "@/assets/bg-forest.jpg";

const HeroSection = () => {
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
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-trust-light text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Лето 2026 — набор открыт!
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ЯЗЫКОВОЙ ЛАГЕРЬ{" "}
              <span className="text-trust">В БОРОВОМ</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground mb-2 max-w-lg">
              Международный языковой лагерь в Боровом для детей 8–15 лет
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg">
              Lingvo Camp — это пространство, где дети из разных стран учатся, общаются и развиваются в атмосфере полного языкового погружения. Мы создаём живую международную среду, в которой ребёнок начинает говорить на английском свободно, уверенно и без страха.
            </p>

            {/* Stats */}
            {/* Feature bullets */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-trust" />
                <span className="font-medium">Английский язык с носителями</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4 text-trust" />
                <span className="font-medium">Международная среда общения</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-trust" />
                <span className="font-medium">Природа соснового леса и чистый воздух</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4 text-trust" />
                <span className="font-medium">8000+ родителей</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-trust-light px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-trust" />
                <span className="font-medium">10 лет опыта</span>
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
                className="inline-flex flex-col items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                <span className="text-xs font-bold uppercase tracking-wider">Весенняя смена</span>
                <span className="inline-flex items-center gap-2">
                  Наурыз 2026
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button
                onClick={scrollToApply}
                className="inline-flex flex-col items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-glow"
              >
                <span className="text-xs font-bold uppercase tracking-wider">Летние смены</span>
                <span className="inline-flex items-center gap-2">
                  2026
                  <ArrowRight className="w-5 h-5" />
                </span>
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
