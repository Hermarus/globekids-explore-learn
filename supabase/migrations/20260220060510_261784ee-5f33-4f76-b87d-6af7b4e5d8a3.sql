
-- Create landing_content table
CREATE TABLE public.landing_content (
  key text PRIMARY KEY,
  value text NOT NULL,
  type text NOT NULL DEFAULT 'text' CHECK (type IN ('text', 'image', 'link')),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.landing_content ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Anyone can read content"
ON public.landing_content FOR SELECT
USING (true);

-- Admin write
CREATE POLICY "Admins can insert content"
ON public.landing_content FOR INSERT
TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update content"
ON public.landing_content FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete content"
ON public.landing_content FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

-- Auto-update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_landing_content_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_landing_content_updated_at
BEFORE UPDATE ON public.landing_content
FOR EACH ROW
EXECUTE FUNCTION public.update_landing_content_timestamp();

-- Seed data
INSERT INTO public.landing_content (key, value, type) VALUES
-- Hero
('hero.tagline', 'Лето 2025 — набор открыт!', 'text'),
('hero.title', 'ЯЗЫКОВОЙ ЛАГЕРЬ', 'text'),
('hero.title_highlight', 'В БОРОВОМ', 'text'),
('hero.description', 'Lingvo Camp — международный языковой лагерь для детей от 8 до 15 лет с полным погружением в английскую среду, авторской образовательной программой и насыщенной культурной программой в Боровом.', 'text'),
('hero.stat_students', '2500+ учеников', 'text'),
('hero.stat_experience', '8 лет опыта', 'text'),
('hero.stat_rating', '4.9 рейтинг', 'text'),
('hero.cta_primary', 'Забронировать место', 'text'),
('hero.cta_secondary', 'Смотреть видео', 'text'),
-- Header
('header.brand', 'Lingvo Camp', 'text'),
('header.cta', 'Оставить заявку', 'text'),
('header.nav_destinations', 'Направления', 'text'),
('header.nav_benefits', 'Преимущества', 'text'),
('header.nav_process', 'Как это работает', 'text'),
('header.nav_trust', 'Безопасность', 'text'),
-- Destinations
('destinations.label', 'Направления 2025', 'text'),
('destinations.title', 'Выберите страну для', 'text'),
('destinations.title_highlight', 'незабываемого лета', 'text'),
('destinations.subtitle', 'Каждое направление тщательно отобрано нашей командой для идеального сочетания обучения, отдыха и безопасности', 'text'),
-- Benefits
('benefits.label', 'Почему мы', 'text'),
('benefits.title', 'Преимущества обучения', 'text'),
('benefits.title_highlight', 'за рубежом', 'text'),
-- Process
('process.label', 'Как это работает', 'text'),
('process.title', '5 шагов к', 'text'),
('process.title_highlight', 'незабываемому лету', 'text'),
('process.subtitle', 'Простой и понятный процесс от заявки до получения результата', 'text'),
-- Trust
('trust.label', 'Безопасность', 'text'),
('trust.title', 'Доверьте нам самое', 'text'),
('trust.title_highlight', 'ценное', 'text'),
('trust.subtitle', 'Мы понимаем, как важно для родителей спокойствие за ребёнка. Поэтому безопасность — наш главный приоритет.', 'text'),
-- Form
('form.label', 'Начните прямо сейчас', 'text'),
('form.title', 'Забронируйте место', 'text'),
('form.title_highlight', 'для вашего ребёнка', 'text'),
('form.subtitle', 'Оставьте заявку и получите бесплатную консультацию. Наш менеджер свяжется с вами в течение 30 минут.', 'text'),
('form.card_title', 'Оставить заявку', 'text'),
('form.card_subtitle', 'Заполните форму и мы свяжемся с вами', 'text'),
('form.phone', '+7 (800) 123-45-67', 'text'),
('form.email', 'info@educamp.ru', 'text'),
-- Footer
('footer.phone', '+7 (778) 439-91-62', 'text'),
('footer.email', 'info@educamp.ru', 'text'),
('footer.address', 'Москва, ул. Пресненская, 10', 'text'),
('footer.description', 'Международные образовательные лагеря с изучением английского языка для детей 7–17 лет.', 'text'),
('footer.copyright', '© 2025 EduCampGlobal. Все права защищены.', 'text'),
('footer.whatsapp', 'http://wa.me/77784399162', 'link');
