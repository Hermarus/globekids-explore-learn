import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, Globe2, Users, Shield, Sparkles, HeartHandshake, BookOpen, Trophy
} from "lucide-react";
import bgPark from "@/assets/bg-park.jpg";
import { useLandingContent } from "@/hooks/useLandingContent";

const benefits = [
  { icon: GraduationCap, title: "Носители языка", color: "primary" },
  { icon: Globe2, title: "Полное погружение", color: "accent" },
  { icon: Users, title: "Международные группы", color: "trust" },
  { icon: Shield, title: "Безопасность", color: "primary" },
  { icon: Sparkles, title: "Яркие впечатления", color: "accent" },
  { icon: HeartHandshake, title: "Индивидуальный подход", color: "trust" },
  { icon: BookOpen, title: "Сертификат", color: "primary" },
  { icon: Trophy, title: "Результат", color: "accent" }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return { bg: "bg-primary-light", icon: "text-primary", border: "group-hover:border-primary/30" };
    case "accent":
      return { bg: "bg-accent-light", icon: "text-accent", border: "group-hover:border-accent/30" };
    case "trust":
      return { bg: "bg-trust-light", icon: "text-trust", border: "group-hover:border-trust/30" };
    default:
      return { bg: "bg-primary-light", icon: "text-primary", border: "group-hover:border-primary/30" };
  }
};

const BenefitsSection = () => {
  const { getContent } = useLandingContent();

  return (
    <section id="benefits" className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgPark})` }}
      />
      <div className="absolute inset-0 bg-background/88" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-trust font-semibold text-sm uppercase tracking-wider mb-4">
            {getContent("benefits.label", "Почему мы")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {getContent("benefits.title", "Преимущества обучения")}{" "}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              {getContent("benefits.title_highlight", "за рубежом")}
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            const Icon = benefit.icon;
            return (
              <Card key={index} className={`group border border-border/50 ${colors.border} transition-all duration-300 hover:-translate-y-1 bg-card/95 backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{benefit.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
