import { useState, useMemo } from "react";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SearchBar from "@/components/SearchBar";
import { articles } from "@/data/articles";
import NewsletterForm from "@/components/NewsletterForm";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (query: string, category: string | null) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  const isFiltering = searchQuery.length > 0 || selectedCategory !== null;

  const filteredArticles = useMemo(() => {
    let results = articles;
    if (selectedCategory) {
      results = results.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return results;
  }, [searchQuery, selectedCategory]);

  const displayedArticles = isFiltering ? filteredArticles : articles.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Faraz Sualeh",
    url: "https://farazlabs.lovable.app",
    description: "Practical articles on web development, SEO strategies, and career growth for developers.",
    author: {
      "@type": "Person",
      name: "Faraz Sualeh",
      url: "https://farazlabs.lovable.app/about",
    },
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEOHead
        title="Faraz Sualeh - Web Developer & SEO Specialist"
        description="Faraz Sualeh shares practical articles on web development, SEO strategies, and career growth for developers."
        canonicalPath="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <IntroSection />

        <section id="articles" className="py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {isFiltering ? "Search Results" : "Latest Articles"}
            </h2>
          </div>

          <div className="mb-10">
            <SearchBar onSearch={handleSearch} />
          </div>

          {displayedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayedArticles.map((article, index) => (
                  <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                    <ArticleCard {...article} size="small" />
                  </div>
                ))}
              </div>
              {!isFiltering && (
                <div className="text-center mt-10">
                  <a
                    href="/articles"
                    className="inline-flex items-center gap-1 text-base font-medium text-accent hover:underline transition-colors"
                  >
                    View all 🡢
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different keyword or category.</p>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-8 sm:p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Stay in the loop.</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Get my latest articles on web development and SEO delivered straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/web-dev" className="hover:text-accent transition-colors">Web Dev</a></li>
                <li><a href="/seo" className="hover:text-accent transition-colors">SEO</a></li>
                <li><a href="/tech" className="hover:text-accent transition-colors">Tech</a></li>
                <li><a href="/career" className="hover:text-accent transition-colors">Career</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">About Me</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/farazsualeh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/faraz-sualeh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com/editsbyfaraz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Faraz Sualeh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
