import { FileText, Plane, BookOpen, Home, PartyPopper } from "lucide-react";
import { useLandingContent } from "@/hooks/useLandingContent";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Заявка",
    description: "Оставьте заявку и получите бесплатную консультацию. Мы подберём идеальную программу.",
    accent: "primary"
  },
  {
    icon: Plane,
    step: "02",
    title: "Подготовка",
    description: "Оформляем все документы, визы и бронирование. Вы просто собираете чемоданы!",
    accent: "accent"
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Обучение",
    description: "Интенсивные занятия английским с носителями в игровой и практической форме.",
    accent: "trust"
  },
  {
    icon: Home,
    step: "04",
    title: "Погружение",
    description: "Жизнь в международной среде, новые друзья и практика языка 24/7.",
    accent: "primary"
  },
  {
    icon: PartyPopper,
    step: "05",
    title: "Результат",
    description: "Возвращение с новым уровнем языка, сертификатом и яркими воспоминаниями!",
    accent: "accent"
  }
];

const getStepColors = (accent: string) => {
  switch (accent) {
    case "primary":
      return "bg-primary text-primary-foreground";
    case "accent":
      return "bg-accent text-accent-foreground";
    case "trust":
      return "bg-trust text-trust-foreground";
    default:
      return "bg-primary text-primary-foreground";
  }
};

const ProcessSection = () => {
  const { getContent } = useLandingContent();

  return (
    <section id="process" className="section-padding bg-nature-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-trust font-semibold text-sm uppercase tracking-wider mb-4">
            {getContent("process.label", "Как это работает")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {getContent("process.title", "5 шагов к")}{" "}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              {getContent("process.title_highlight", "незабываемому лету")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {getContent("process.subtitle", "Простой и понятный процесс от заявки до получения результата")}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-trust to-accent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative text-center group">
                  {/* Step number circle */}
                  <div className="relative inline-flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl ${getStepColors(step.accent)} flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    {/* Step number */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-card border-2 border-border rounded-full flex items-center justify-center text-xs font-bold text-foreground shadow-soft">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 space-y-2">
                    <h3 className="font-bold text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
