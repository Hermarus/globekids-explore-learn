import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Thermometer, ArrowRight } from "lucide-react";
import dubaiImage from "@/assets/dubai.jpg";
import vietnamImage from "@/assets/vietnam.jpg";

const destinations = [
  {
    id: "dubai",
    country: "ОАЭ",
    city: "Дубай",
    flag: "🇦🇪",
    image: dubaiImage,
    description: "Современный мегаполис с лучшими языковыми школами и безопасной средой для детей",
    price: "от 2 490$",
    duration: "2 недели",
    groupSize: "12-15 детей",
    weather: "+32°C",
    features: ["Проживание 5★", "Экскурсии", "Бассейн", "Пляж"],
    accent: "accent"
  },
  {
    id: "vietnam",
    country: "Вьетнам",
    city: "Нячанг",
    flag: "🇻🇳",
    image: vietnamImage,
    description: "Тропический рай с погружением в международную атмосферу и активным отдыхом",
    price: "от 1 890$",
    duration: "2 недели",
    groupSize: "12-15 детей",
    weather: "+28°C",
    features: ["Резорт", "Дайвинг", "Природа", "Море"],
    accent: "primary"
  }
];

const DestinationsSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" className="section-padding bg-nature-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-trust font-semibold text-sm uppercase tracking-wider mb-4">
            Направления 2025
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Выберите страну для{" "}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              незабываемого лета
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Каждое направление тщательно отобрано нашей командой для идеального сочетания 
            обучения, отдыха и безопасности
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {destinations.map((dest) => (
            <Card 
              key={dest.id} 
              className="group overflow-hidden border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.country} - ${dest.city}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Flag & Location badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-xl px-3 py-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{dest.country}</p>
                    <p className="text-xs text-muted-foreground">{dest.city}</p>
                  </div>
                </div>

                {/* Price badge */}
                <div className={`absolute top-4 right-4 ${dest.accent === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'} text-primary-foreground rounded-xl px-4 py-2`}>
                  <p className="font-bold text-lg">{dest.price}</p>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8">
                {/* Description */}
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {dest.description}
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-trust" />
                    <span className="text-muted-foreground">{dest.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-trust" />
                    <span className="text-muted-foreground">{dest.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Thermometer className="w-4 h-4 text-trust" />
                    <span className="text-muted-foreground">{dest.weather}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-trust" />
                    <span className="text-muted-foreground">{dest.city}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-nature-light text-trust text-xs font-medium px-3 py-1.5 rounded-lg"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={dest.accent === 'accent' ? 'accent' : 'default'}
                  className="w-full"
                  size="lg"
                  onClick={scrollToApply}
                >
                  Забронировать
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;