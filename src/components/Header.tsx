import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Направления", id: "destinations" },
    { label: "Преимущества", id: "benefits" },
    { label: "Как это работает", id: "process" },
    { label: "Безопасность", id: "trust" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Lingvo Camp" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground tracking-tight">
              Lingvo Camp
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/77784399162?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B5."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection("apply")}
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Оставить заявку
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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("apply")}
              className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
