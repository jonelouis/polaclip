import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Play, Zap, Scissors, Rocket, MessageCircle, Mail } from "lucide-react";
import { Check } from "lucide-react";

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const packages = [
    {
      name: "Starter",
      monthlyClips: 12,
      originalPrice: 250,
      discountedPrice: 200,
      description: "Perfect for getting started",
      features: [
        "12 short clips per month",
        "Captions on all clips",
        "Client branding (logo, handle)",
        "48-hour delivery guaranteed",
        "24-hour revision turnaround",
        "2 revision rounds per month",
        "Vertical format (9:16)",
      ],
    },
    {
      name: "Growth",
      monthlyClips: 30,
      originalPrice: 500,
      discountedPrice: 400,
      description: "For serious content creators",
      featured: true,
      features: [
        "30 short clips per month",
        "Captions on all clips",
        "Client branding (logo, handle)",
        "48-hour delivery guaranteed",
        "24-hour revision turnaround",
        "2 revision rounds per month",
        "Vertical format (9:16)",
      ],
    },
    {
      name: "Pro",
      monthlyClips: 70,
      originalPrice: 900,
      discountedPrice: 720,
      description: "Maximum reach and growth",
      features: [
        "70 short clips per month",
        "Captions on all clips",
        "Custom thumbnails included",
        "Client branding (logo, handle)",
        "48-hour delivery guaranteed",
        "24-hour revision turnaround",
        "3 revision rounds per month",
        "Vertical format (9:16)",
      ],
    },
  ];

  const faqItems = [
    {
      question: "What video formats do you accept?",
      answer: "We accept videos from YouTube, Facebook, Instagram, TikTok, and any standard video format. Just share the link or upload the file.",
    },
    {
      question: "Can I request specific clips from my video?",
      answer: "Absolutely! You can specify which sections of your video you'd like us to focus on, or let us find the best moments for engagement.",
    },
    {
      question: "What if I don't like the sample clips?",
      answer: "We offer revision rounds included in your package. You can request changes, and we'll deliver revised clips within 24 hours.",
    },
    {
      question: "Do you add captions and branding?",
      answer: "Yes! All clips include professional captions burned in. We also add your logo and handle to every clip for brand consistency.",
    },
    {
      question: "How does the sample process work?",
      answer: "Contact us via WhatsApp or Telegram to request a sample. Share your long video, and we'll deliver 1 sample clip within 48 hours via your preferred platform.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cryptocurrency, Wise transfers, and Ko-fi donations. Payment details will be shared after you approve the sample.",
    },
  ];

  const portfolioItems = [
    {
      title: "Tech Channel Highlights",
      platform: "YouTube → Shorts",
      niche: "Technology",
      description: "Converted 45-minute tech reviews into 15 viral shorts",
    },
    {
      title: "Fitness Transformation",
      platform: "Instagram → Reels",
      niche: "Fitness",
      description: "Extracted motivational moments from long-form workout content",
    },
    {
      title: "Podcast Clips",
      platform: "Podcast → TikTok",
      niche: "Business",
      description: "Turned 90-minute episodes into shareable wisdom clips",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Prominent Free Sample Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-4 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg font-bold font-poppins flex items-center justify-center gap-2">
            <span className="text-2xl">🎬</span>
            Try Before You Buy — Request <span className="underline">FREE Sample Clip</span> from Your Video. No Payment. No Risk.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground leading-tight mb-4">
                  Turn Your Long Videos Into <span className="text-primary">Viral Short Clips</span> — Done For You
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We repurpose your YouTube, Facebook and Instagram videos into ready-to-post Reels, Shorts & TikToks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#pricing">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    See Pricing
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-primary/20">
              <div className="text-center">
                <Play className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-foreground font-semibold">Sample Clips Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-8">The Problem</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>You create amazing long-form content.</p>
            <p>But most people will never see it.</p>
            <p className="text-2xl font-semibold text-foreground">
              Short clips get <span className="text-primary">3–5x more reach</span> —
            </p>
            <p>and you don't have time to make them.</p>
          </div>
        </div>
      </section>

      {/* Solution Section - 3 Steps */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-16">The Solution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">You Share Your Video</h3>
              <p className="text-muted-foreground">Send us your long-form content from YouTube, Facebook, or Instagram.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Scissors className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">We Create the Clips</h3>
              <p className="text-muted-foreground">Our team crafts engaging short clips with captions and your branding.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">You Post and Grow</h3>
              <p className="text-muted-foreground">Download ready-to-post clips and watch your reach explode.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">Our Guarantee</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">48-hour delivery guaranteed</h3>
                <p className="text-muted-foreground text-sm">Fast turnaround on all clip orders</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">24-hour revision turnaround</h3>
                <p className="text-muted-foreground text-sm">Quick adjustments to your clips</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Captions included on all clips</h3>
                <p className="text-muted-foreground text-sm">Professional captions burned in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Free sample first</h3>
                <p className="text-muted-foreground text-sm">See our work before you commit</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Multiple payment options</h3>
                <p className="text-muted-foreground text-sm">Crypto, Wise, Ko-fi & more</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Vertical format optimized</h3>
                <p className="text-muted-foreground text-sm">9:16 for Reels, Shorts & TikTok</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-secondary scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with a free sample. Once you're satisfied with our work, choose the package that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border-2 transition-all ${
                  pkg.featured
                    ? "border-primary bg-gradient-to-br from-primary/5 to-white shadow-xl scale-105"
                    : "border-border bg-white hover:shadow-lg"
                }`}
              >
                {pkg.featured && (
                  <div className="bg-primary text-white text-center py-2 font-bold rounded-t-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold font-poppins text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">
                        ${pkg.discountedPrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      /month (first month 20% off)
                    </p>
                    <p className="text-sm font-semibold text-primary mt-2">
                      {pkg.monthlyClips} clips per month
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3 mb-8">
                    <a
                      href="https://wa.me/1234567890?text=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample%20for%20the%20{pkg.name}%20package"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Sample
                    </a>
                    <a
                      href="https://t.me/polaclip?text=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample%20for%20the%20{pkg.name}%20package"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-white hover:bg-foreground/90 font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Telegram Sample
                    </a>
                    <a
                      href="mailto:hello@polaclip.com?subject=Sample%20Request%20-%20{pkg.name}%20Package&body=Hi%20Pola%20Clip!%20I%20want%20to%20request%20a%20sample%20for%20the%20{pkg.name}%20package."
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-primary hover:bg-secondary/80 font-bold py-3 px-4 rounded-lg transition-colors border border-primary"
                    >
                      <Mail className="w-5 h-5" />
                      Email Sample Request
                    </a>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-foreground">Includes:</p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Process Info */}
          <div className="mt-16 bg-white p-8 rounded-xl border border-border max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">How Our Sample Process Works</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><span className="font-semibold text-foreground">1. Request Sample:</span> Click WhatsApp or Telegram to contact us with your long video link or file.</p>
              <p><span className="font-semibold text-foreground">2. We Create:</span> Our team creates 1 sample clip within 48 hours and delivers it via your preferred platform.</p>
              <p><span className="font-semibold text-foreground">3. Review & Approve:</span> Check the sample quality and let us know if you want revisions.</p>
              <p><span className="font-semibold text-foreground">4. Payment & Subscription:</span> Once satisfied, we'll send you payment details (crypto, Wise, Ko-fi). After payment, your subscription begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Callout Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
              See Our <span className="text-primary">Work in Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out samples from our portfolio to see the quality and creativity we bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold font-poppins text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-primary font-semibold">{item.platform}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.niche}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to see your videos go viral?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with a free sample. No commitment, no payment upfront. Just quality clips.
          </p>
          <Link href="#pricing">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg">
              Request Your Free Sample
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2026 Pola Clip. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="#pricing">
              <a className="hover:text-primary transition-colors">Pricing</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-primary transition-colors">Contact</a>
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
