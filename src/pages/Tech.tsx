import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Tech = () => {
  const techArticles = articles.filter(article => article.category.toLowerCase() === "tech");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">Tech</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Deep dives into programming languages, tools, best practices, and the broader technology landscape.
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techArticles.map((article, index) => (
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

export default Tech;
