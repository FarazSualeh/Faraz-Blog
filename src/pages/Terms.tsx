import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 block"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
        <div className="mb-12 space-y-4">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Service
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: February 21, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-muted-foreground">
              This website is run by Faraz Sualeh. By using this site, you agree to these simple terms. 
              If something here doesn't sit right with you, feel free to reach out — or simply don't use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What This Site Is</h2>
            <p className="text-muted-foreground">
              This is my personal blog and portfolio where I share articles, insights, and resources about 
              web development, SEO, and technology. Everything here is written by me (Faraz) and reflects 
              my personal opinions and experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Content & Copyright</h2>
            <p className="text-muted-foreground mb-4">
              All original content — articles, code snippets, images, and designs — is my intellectual property. You're welcome to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Read, share, and link to my articles (with proper attribution)</li>
              <li>Reference my code snippets in your own projects</li>
              <li>Quote portions of my writing with credit</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Please <strong>don't</strong> copy entire articles, republish my content as your own, or use my work 
              for commercial purposes without asking first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p className="text-muted-foreground">
              When you subscribe to my newsletter, you'll receive emails about new articles, tips, and 
              occasional updates. You can unsubscribe anytime — no hard feelings. I'll never spam you 
              or share your email with anyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <p className="text-muted-foreground">
              When you send me a message through the contact form, I expect respectful communication. 
              I'll do my best to respond within 24–48 hours. Please don't use the form for spam or 
              unsolicited promotions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Guarantees</h2>
            <p className="text-muted-foreground">
              I do my best to keep everything accurate and up-to-date, but I can't guarantee that every 
              piece of advice, code snippet, or tutorial will work perfectly for your specific situation. 
              Use the information at your own discretion. Tech moves fast — always double-check with 
              official documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p className="text-muted-foreground">
              My articles may link to external websites, tools, or resources. I'm not responsible for 
              the content or practices of those sites. I only link to things I genuinely find useful, 
              but always do your own due diligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
            <p className="text-muted-foreground">
              I may update these terms as the site evolves. The date at the top will always reflect the 
              latest version. Nothing dramatic — just keeping things current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Email me at{" "}
              <a href="mailto:farazsualeh75@gmail.com" className="text-primary hover:underline">
                farazsualeh75@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;
