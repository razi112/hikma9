import Section from "@/components/Section";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Section id="contact" className="bg-cream">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Get In Touch
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mt-2">
          Contact Us
        </h2>
        <p className="text-muted-foreground mt-3">
          Have a question or want to get involved? We'd love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-card p-8 rounded-lg shadow-sm border border-border space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Your Name" required className="bg-background" />
          <Input type="email" placeholder="Email Address" required className="bg-background" />
        </div>
        <Input placeholder="Subject" required className="bg-background" />
        <Textarea placeholder="Your message..." rows={5} required className="bg-background resize-none" />
        <Button type="submit" disabled={loading} className="w-full bg-navy text-gold-light hover:bg-navy-light">
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Send Message
            </>
          )}
        </Button>
      </form>
    </Section>
  );
};

export default ContactSection;
