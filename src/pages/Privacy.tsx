import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: February 21, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Hey, transparency matters to me</h2>
            <p className="text-muted-foreground">
              I'm Faraz Sualeh, and this is my personal blog and portfolio. I believe in keeping things 
              straightforward — here's exactly what data I collect, why, and how I handle it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What I Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Newsletter Subscription</h3>
            <p className="text-muted-foreground mb-4">
              If you subscribe to my newsletter, I collect your <strong>email address</strong> — that's it. 
              I use it solely to send you articles, tips, and updates about web development, SEO, and tech.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Contact Form</h3>
            <p className="text-muted-foreground mb-4">
              When you reach out through my contact form, I collect your <strong>name, email, subject, and message</strong>. 
              This information is used only to respond to your inquiry.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatic Data</h3>
            <p className="text-muted-foreground">
              Like most websites, basic analytics may be collected (page views, browser type, general location). 
              I don't use this to identify you personally — it just helps me understand which articles resonate 
              and how to improve the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How I Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Send you my newsletter (only if you subscribed)</li>
              <li>Reply to your messages from the contact form</li>
              <li>Improve the content and user experience of this site</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              I will <strong>never</strong> sell your data, spam you, or share your email with third parties for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              This site uses minimal cookies for basic functionality (like remembering your theme preference). 
              I don't use invasive tracking cookies or retargeting pixels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You're always in control of your data. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Unsubscribe</strong> from the newsletter at any time</li>
              <li><strong>Request deletion</strong> of your data by emailing me</li>
              <li><strong>Ask what data I have</strong> about you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              I use trusted services to host and run this site (like cloud hosting and database providers). 
              These services have their own privacy policies. I link to external resources in my articles — 
              once you leave my site, their privacy policies apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes</h2>
            <p className="text-muted-foreground">
              If I ever update this policy, I'll note the date at the top. No sneaky changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-muted-foreground">
              Reach out anytime at{" "}
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

export default Privacy;
