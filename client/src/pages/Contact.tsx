import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
            Have questions? Want to get support? We're here to help via Email, WhatsApp, or Telegram.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-poppins text-foreground text-center mb-12">
            Reach Us On Your Preferred Platform
          </h2>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4 p-6 bg-secondary rounded-lg border border-border">
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
            <div className="flex gap-4 p-6 bg-secondary rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Chat with us directly for quick responses
                </p>
                <a
                  href="https://wa.me/1234567890?text=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex gap-4 p-6 bg-secondary rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">Telegram</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with us on Telegram for instant messaging
                </p>
                <a
                  href="https://t.me/polaclip?text=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-white hover:bg-foreground/90 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Process Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-poppins text-foreground mb-8">
            How to Request Your Sample
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Request Sample</h3>
                <p className="text-muted-foreground">
                  Click Request Free Sample and fill the form with your long video link or file.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Share Your Video</h3>
                <p className="text-muted-foreground">
                  Send us your YouTube/Facebook/Instagram link or upload your video.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">We Create Your Sample</h3>
                <p className="text-muted-foreground">
                  Our team will create 1 professional sample clip within 48 hours and deliver it via Email.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Review & Decide</h3>
                <p className="text-muted-foreground">
                  Check the sample quality. If you love it, we'll discuss your package and payment options. If you want revisions, we'll adjust it.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Payment & Start</h3>
                <p className="text-muted-foreground">
                  Once satisfied, we'll send you payment details. After payment, your subscription begins immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-poppins text-foreground text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Is there a cost for the sample?
              </h3>
              <p className="text-muted-foreground">
                No! The sample is completely free. You only pay if you're satisfied and want to subscribe to one of our packages.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                How long does the sample take?
              </h3>
              <p className="text-muted-foreground">
                We deliver samples within 48 hours. Most samples are ready within 24 hours.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Can I request revisions to the sample?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! If you'd like adjustments to the sample, just let us know and we'll revise it.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground">
                We accept Cryptocurrency, Cards, Payoneer transfers and other payment methods. We'll discuss options that work best for you.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Can I cancel after starting?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can cancel anytime after your first month. No long-term contracts or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Request your free sample today and see what we can do for your videos.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/1234567890?text=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Your Free Sample
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2026 Pola Clip. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/#pricing">
              <a className="hover:text-primary transition-colors">Pricing</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-primary transition-colors">About</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
