import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

const WebDev = () => {
  const webDevArticles = articles.filter(article => article.category.toLowerCase() === "web dev");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 block">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">Web Development</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Tutorials, tips, and deep dives into React, TypeScript, Tailwind CSS, and modern frontend development.
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDevArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Web Development?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>The web is the most accessible platform ever created. Building for it means your work can reach anyone, anywhere, on any device. I write about the tools and techniques that make web development both productive and enjoyable.</p>
              <p>Whether you're just starting with HTML/CSS or building complex React applications, these articles aim to make you a better, more confident developer.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebDev;
