import { useState, useMemo } from "react";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SearchBar from "@/components/SearchBar";
import { articles } from "@/data/articles";

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
      results = results.filter(
        (a) => a.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return results;
  }, [searchQuery, selectedCategory]);

  const displayedArticles = isFiltering ? filteredArticles : articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Featured Articles Grid */}
        <section id="articles" className="py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {isFiltering ? "Search Results" : "Featured Articles"}
            </h2>
            {!isFiltering && (
              <a
                href="#all"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60"
              >
                View all →
              </a>
            )}
          </div>

          {/* Search Bar */}
          <div className="mb-10">
            <SearchBar onSearch={handleSearch} />
          </div>

          {displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}
                >
                  <ArticleCard {...article} size="small" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                No articles found matching your search.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try a different keyword or category.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-8 sm:p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Stay inspired.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Subscribe to receive our latest articles and insights directly in
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3.5 sm:py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm"
              />
              <button className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/wellness" className="hover:text-accent transition-colors">Wellness</a></li>
                <li><a href="/travel" className="hover:text-accent transition-colors">Travel</a></li>
                <li><a href="/creativity" className="hover:text-accent transition-colors">Creativity</a></li>
                <li><a href="/growth" className="hover:text-accent transition-colors">Growth</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="/authors" className="hover:text-accent transition-colors">Authors</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/style-guide" className="hover:text-accent transition-colors">Style Guide</a></li>
                <li><a href="/#newsletter" className="hover:text-accent transition-colors">Newsletter</a></li>
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
            <p>© 2025 Perspective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
