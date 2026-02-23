import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Instagram className="w-4 h-4" />
          Наш Instagram
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Смотрите, как проходит лагерь
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Подписывайтесь на наш Instagram, чтобы видеть живые моменты из лагеря, отзывы детей и родителей
        </p>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.instagram.com/p/DUOJgFeEgaL/embed"
              className="w-full"
              height="520"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              title="Instagram Lingvo Camp"
            />
          </div>
        </div>

        <a
          href="https://instagram.com/lingvocamp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
          Подписаться на @lingvocamp
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
