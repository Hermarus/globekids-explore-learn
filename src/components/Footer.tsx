import { GraduationCap, Plane, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { useLandingContent } from "@/hooks/useLandingContent";

const Footer = () => {
  const { getContent } = useLandingContent();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <Plane className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="font-bold text-lg">EduCamp</span>
                <span className="text-primary font-semibold">Global</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {getContent("footer.description", "Международные образовательные лагеря с изучением английского языка для детей 7–17 лет.")}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={getContent("footer.whatsapp", "http://wa.me/77784399162")} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Направления</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">🇰🇿 Боровое, Казахстан</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">🇻🇳 Фукуок, Вьетнам</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Все программы</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Расписание смен</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">О компании</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>{getContent("footer.phone", "+7 (778) 439-91-62")}</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>{getContent("footer.email", "info@educamp.ru")}</span>
              </li>
              <li>
                <a href={getContent("footer.whatsapp", "http://wa.me/77784399162")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>{getContent("footer.address", "Москва, ул. Пресненская, 10")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>{getContent("footer.copyright", "© 2025 EduCampGlobal. Все права защищены.")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
