const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          Building the web, one project at a time — and sharing everything I learn along the way.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          From React and TypeScript to SEO strategy and career growth, 
          I write practical articles for developers who want to build better 
          websites and grow their careers.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
