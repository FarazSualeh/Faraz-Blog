import Header from "@/components/Header";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-10 sm:mb-16 text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Web Developer & SEO Specialist passionate about building fast, accessible websites that rank.
          </p>
        </div>

        <section className="mb-10 sm:mb-16 space-y-4 sm:space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Hey, I'm Faraz 👋</h2>
          <p>
            I'm a Web Developer and SEO Specialist who believes great websites should be both beautiful and
            discoverable. I combine modern frontend development with data-driven SEO strategies to help businesses build
            an impactful online presence.
          </p>
          <p>
            My tech stack includes React, TypeScript, Tailwind CSS, and Next.js for development, and I use tools like
            Ahrefs, Google Search Console, and Screaming Frog for SEO audits and strategy.
          </p>
          <p>
            Through this blog, I share practical tutorials, SEO insights, and career advice for developers. Everything I
            write comes from real experience, no fluff, just actionable knowledge.
          </p>
        </section>

        <section className="mb-10 sm:mb-16 rounded-2xl bg-card p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What I Do</h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Build responsive, performant websites and web apps with NextJS & TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Optimize websites for search engines: On-page SEO, Technical SEO and Backlinks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Improve Core Web Vitals and page performance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Write about web development, SEO, and career growth</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Skills & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-muted">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Development</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Next.js, React, TypeScript, Tailwind CSS, Bootstrap, Node.js, Vite, SQL
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-xl bg-muted">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">SEO & Analytics</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Google Search Console, Ahrefs, SEMrush, GA4</p>
            </div>
            <div className="p-5 sm:p-6 rounded-xl bg-muted">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Performance</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Core Web Vitals, Lighthouse, PageSpeed Insights, WebPageTest
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-xl bg-muted">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Other</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Canva, Technical Writing, UI/UX Design</p>
            </div>
          </div>
        </section>

        <section className="text-center py-8 sm:py-12 px-4 rounded-2xl bg-card">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Need a developer who understands SEO? Let's chat about your project.
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
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
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" asChild>
            <a href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
