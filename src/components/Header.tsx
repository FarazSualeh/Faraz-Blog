import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Web Dev", href: "/web-dev" },
    { label: "SEO", href: "/seo" },
    { label: "Tech", href: "/tech" },
    { label: "Career", href: "/career" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">F</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Faraz Sualeh</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>

            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all"
              asChild
            >
              <a href="/contact">Let's Connect</a>
            </Button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-muted/60 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[4.5rem] z-40 animate-fade-in">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative mx-3 mt-2 rounded-3xl bg-card border border-border shadow-xl overflow-hidden animate-slide-up">
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center text-base font-medium px-4 py-3 rounded-2xl hover:bg-muted/60 transition-all active:scale-[0.98]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full py-6 text-base font-medium"
                  asChild
                >
                  <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Let's Connect
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
