import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Instagram, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import bgBeach from "@/assets/bg-beach.jpg";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    destination: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ parentName: "", phone: "", email: "", childName: "", childAge: "", destination: "" });
    } catch (error: any) {
      console.error("Ошибка отправки:", error);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="apply" className="section-padding relative overflow-hidden">
      {/* Nature background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBeach})` }}
      />
      {/* Muted overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/88 via-nature-light/80 to-background/90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Начните прямо сейчас
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Забронируйте место{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  для вашего ребёнка
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и получите бесплатную консультацию. 
                Наш менеджер свяжется с вами в течение 30 минут.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-foreground">Бесплатная консультация без обязательств</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-foreground">Индивидуальный подбор программы</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-foreground">Раннее бронирование — скидка 10%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-foreground">Гибкая система оплаты</span>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-semibold text-foreground">+7 (778) 439-91-62</p>
                </div>
              </div>
              <a href="https://instagram.com/lingvocamp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-medium transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-semibold text-foreground">@lingvocamp</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-medium bg-card/98 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Оставить заявку
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Заполните форму и мы свяжемся с вами
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Ваше имя *
                      </label>
                      <Input
                        type="text"
                        name="parentName"
                        placeholder="Как к вам обращаться?"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Телефон *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Имя ребёнка
                        </label>
                        <Input
                          type="text"
                          name="childName"
                          placeholder="Имя"
                          value={formData.childName}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Возраст
                        </label>
                        <Input
                          type="number"
                          name="childAge"
                        placeholder="8-15"
                        min="8"
                        max="15"
                          value={formData.childAge}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Предпочтительное направление
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-border bg-card px-4 py-3 text-base ring-offset-background transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus-visible:outline-none"
                      >
                        <option value="">Выберите направление</option>
                        <option value="borovoe">🇰🇿 Боровое, Казахстан</option>
                        <option value="vietnam">🇻🇳 Фукуок, Вьетнам</option>
                        <option value="dubai">🇦🇪 Дубай, ОАЭ</option>
                        <option value="any">Не определился</option>
                      </select>
                    </div>
                  </div>

                  <Button variant="accent" size="lg" className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-trust-light flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-trust" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Заявка отправлена!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Спасибо за интерес к нашим программам. 
                    Наш менеджер свяжется с вами в течение 30 минут.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Отправить ещё одну заявку
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;