import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-xl font-bold text-foreground tracking-tight">
            EduCampGlobal
          </span>

          {/* Desktop: Contact info + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+77750070030"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +7 775 007 00 30
            </a>
            <a
              href="https://wa.me/77750070030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => scrollToSection("apply")}
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded font-medium hover:bg-accent-dark transition-colors"
            >
              Забронировать путевку
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
            <a
              href="tel:+77750070030"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 775 007 00 30
            </a>
            <a
              href="https://wa.me/77750070030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => scrollToSection("apply")}
              className="w-full bg-accent text-accent-foreground px-6 py-3 rounded font-medium hover:bg-accent-dark transition-colors"
            >
              Забронировать путевку
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
