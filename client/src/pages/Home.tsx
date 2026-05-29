import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Play, Zap, Scissors, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
                <Link href="/portfolio">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    See Our Work
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold">
                    View Packages
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
                <h3 className="font-bold text-foreground mb-1">First month 20% off</h3>
                <p className="text-muted-foreground text-sm">Start your journey with us today</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-primary font-bold mt-1">✓</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Cancel anytime after month 1</h3>
                <p className="text-muted-foreground text-sm">No long-term contracts required</p>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to grow on short-form?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's start creating viral clips from your content. First month is 20% off.
          </p>
          <Link href="/order">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg">
              Get Started — First Month 20% Off
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2026 Pola Clip. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/contact">
              <a className="hover:text-primary transition-colors">Contact</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-primary transition-colors">About</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-primary transition-colors">Services</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
