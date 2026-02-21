import Header from "@/components/Header";
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Invalid input",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Save to database
      const validData = result.data;
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert([{ name: validData.name, email: validData.email, subject: validData.subject, message: validData.message }]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: result.data,
      });

      if (fnError) {
        console.error("Email sending failed, but message was saved:", fnError);
      }

      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-10 sm:mb-16 text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">Get in Touch</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Have a project idea, a question, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="rounded-2xl bg-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-slide-up stagger-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-base" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-base" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-base" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none text-base" placeholder="Tell me about your project..." />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-2xl bg-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
              <div className="space-y-5 sm:space-y-6">
                <a href="mailto:farazsualeh75@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors"><Mail className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold mb-1">Email</h3><p className="text-muted-foreground text-sm sm:text-base">farazsualeh75@gmail.com</p><p className="text-muted-foreground text-xs sm:text-sm">I'll respond within 24 hours</p></div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold mb-1">Location</h3><p className="text-muted-foreground text-sm sm:text-base">Available for remote work worldwide</p></div>
                </div>
                <a href="https://github.com/farazsualeh" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors"><Github className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold mb-1">GitHub</h3><p className="text-muted-foreground text-sm sm:text-base">github.com/farazsualeh</p></div>
                </a>
                <a href="https://linkedin.com/in/faraz-sualeh" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors"><Linkedin className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold mb-1">LinkedIn</h3><p className="text-muted-foreground text-sm sm:text-base">linkedin.com/in/faraz-sualeh</p></div>
                </a>
                <a href="https://instagram.com/editsbyfaraz" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors"><Instagram className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold mb-1">Instagram</h3><p className="text-muted-foreground text-sm sm:text-base">@editsbyfaraz</p></div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Services I Offer</h3>
              <div className="space-y-4 text-sm">
                <div><h4 className="font-semibold mb-1">Web Development</h4><p className="text-muted-foreground">Custom React/Next.js websites built for performance and accessibility.</p></div>
                <div><h4 className="font-semibold mb-1">SEO Consulting</h4><p className="text-muted-foreground">Technical audits, keyword strategy, and on-page optimization to boost your rankings.</p></div>
                <div><h4 className="font-semibold mb-1">Performance Optimization</h4><p className="text-muted-foreground">Core Web Vitals improvements, page speed optimization, and lighthouse score fixes.</p></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
