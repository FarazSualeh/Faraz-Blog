import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-6 sm:my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 p-4 sm:p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
            alt="Faraz Sualeh - Web Developer workspace"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-xs sm:text-sm font-medium text-accent tracking-wider uppercase animate-slide-down">Web Developer & SEO Specialist</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Hi, I'm Faraz Sualeh
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              I build fast, accessible websites and help businesses rank higher on Google. 
              Sharing what I learn about web development, SEO, and the tech industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 animate-slide-up stagger-2">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 text-sm sm:text-base font-medium transition-all hover:scale-105 w-full sm:w-auto" asChild>
              <a href="#articles">Read My Blog</a>
            </Button>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/farazsualeh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/faraz-sualeh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com/editsbyfaraz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
