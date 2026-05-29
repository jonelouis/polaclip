import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to discuss your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-poppins text-foreground mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or ask any questions..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-poppins text-foreground">
                Other Ways to Reach Us
              </h2>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:hello@polaclip.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    hello@polaclip.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Quick questions? Chat with us directly
                  </p>
                </div>
              </div>

              {/* Calendly */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Schedule a Call</h3>
                  <a
                    href="https://calendly.com/polaclip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Book a time on Calendly
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Let's discuss your project in detail
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available Monday-Friday, 9am-5pm
                  </p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">Frequently Asked Questions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Check out our How It Works page for answers to common questions about our process.
                </p>
                <a
                  href="/how-it-works"
                  className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                >
                  View FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to transform your videos?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's get started on your first order today.
          </p>
          <a
            href="/order"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2026 Pola Clip. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
