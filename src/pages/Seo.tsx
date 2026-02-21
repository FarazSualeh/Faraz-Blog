import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

const Seo = () => {
  const seoArticles = articles.filter(article => article.category.toLowerCase() === "seo");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 block">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">SEO</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Practical SEO strategies, technical audits, keyword research, and everything you need to rank higher on Google.
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why SEO Matters</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>SEO is the bridge between building a great website and getting it seen. Without it, even the best content stays invisible. I share actionable strategies that I use with real clients and projects.</p>
              <p>From technical foundations to content optimization and link building, these articles cover the full spectrum of modern SEO practice.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Seo;
