import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Phone, 
  HeartPulse, 
  Video, 
  Users, 
  MapPin,
  FileCheck,
  Clock
} from "lucide-react";
import bgForest from "@/assets/bg-forest.jpg";

const trustItems = [
  {
    icon: Shield,
    title: "Лицензия и опыт",
    description: "Официальная туроператорская лицензия, 8 лет работы, 2500+ довольных клиентов"
  },
  {
    icon: Phone,
    title: "Связь 24/7",
    description: "Родители на связи с кураторами и детьми в любое время через мессенджеры"
  },
  {
    icon: HeartPulse,
    title: "Медицинская страховка",
    description: "Полная международная страховка с покрытием до $50 000 на каждого ребёнка"
  },
  {
    icon: Video,
    title: "Фото и видео",
    description: "Ежедневные отчёты с фотографиями и видео в родительский чат"
  },
  {
    icon: Users,
    title: "Кураторы-вожатые",
    description: "1 куратор на 5 детей с педагогическим образованием и опытом работы"
  },
  {
    icon: MapPin,
    title: "Проверенные локации",
    description: "Только сертифицированные школы и отели с высшим рейтингом безопасности"
  },
  {
    icon: FileCheck,
    title: "Полный пакет документов",
    description: "Договор, гарантии возврата средств, все необходимые разрешения"
  },
  {
    icon: Clock,
    title: "Прозрачный процесс",
    description: "Подробный план каждого дня, расписание занятий и активностей"
  }
];

const TrustSection = () => {
  return (
    <section id="trust" className="section-padding relative overflow-hidden">
      {/* Nature background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgForest})` }}
      />
      {/* Muted green overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-trust-light/85 to-background/90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-trust font-semibold text-sm uppercase tracking-wider mb-4">
            Безопасность
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Доверьте нам самое{" "}
            <span className="bg-gradient-trust bg-clip-text text-transparent">
              ценное
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы понимаем, как важно для родителей спокойствие за ребёнка. 
            Поэтому безопасность — наш главный приоритет.
          </p>
        </div>

        {/* Trust Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <Card 
                key={index} 
                className="border border-border/50 hover:border-trust/30 transition-all duration-300 hover:-translate-y-1 bg-card/95 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-trust-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-trust" />
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-trust-light flex items-center justify-center">
              <Shield className="w-6 h-6 text-trust" />
            </div>
            <div>
              <p className="font-bold text-foreground">Лицензия РФ</p>
              <p className="text-xs text-muted-foreground">№ ТО-001234</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-nature-light flex items-center justify-center text-2xl">
              ⭐
            </div>
            <div>
              <p className="font-bold text-foreground">Рейтинг 4.9/5</p>
              <p className="text-xs text-muted-foreground">350+ отзывов</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-2xl">
              🏆
            </div>
            <div>
              <p className="font-bold text-foreground">Лучший лагерь</p>
              <p className="text-xs text-muted-foreground">2023, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;