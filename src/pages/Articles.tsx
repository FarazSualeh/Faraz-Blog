import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEOHead
        title="All Articles"
        description="Browse all articles by Faraz Sualeh on web development, SEO strategies, tech insights, and career growth for developers."
        canonicalPath="/articles"
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 block">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">All Articles</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Browse the complete collection of articles on web development, SEO, tech, and career growth.
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Articles;
