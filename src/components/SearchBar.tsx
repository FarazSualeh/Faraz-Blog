import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { articles } from "@/data/articles";

interface SearchBarProps {
  onSearch: (query: string, category: string | null) => void;
}

const categories = Array.from(new Set(articles.map((a) => a.category)));

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onSearch(value, activeCategory);
  };

  const handleCategoryToggle = (cat: string) => {
    const next = activeCategory === cat ? null : cat;
    setActiveCategory(next);
    onSearch(query, next);
  };

  const clearSearch = () => {
    setQuery("");
    setActiveCategory(null);
    onSearch("", null);
  };

  const hasFilters = query.length > 0 || activeCategory !== null;

  return (
    <div className="space-y-4 animate-slide-up">
      {/* Search input */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search articles by keyword..."
          className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-full border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
        {hasFilters && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryToggle(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
