import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            About <span className="text-primary">Pola Clip</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're passionate about helping content creators reach wider audiences through the power of short-form video.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At Pola Clip, we believe that great content shouldn't be hidden. Many creators spend hours producing high-quality long-form videos, but the majority of their audience never sees them because short-form content dominates social media algorithms.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our mission is simple: help creators maximize the value of their content by transforming it into engaging short clips optimized for viral growth on Reels, Shorts, and TikTok.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We handle the editing, captions, and optimization so you can focus on what you do best—creating amazing content.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-12 border-2 border-primary/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
                  <p className="text-muted-foreground">More reach with short-form content</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">48 Hours</div>
                  <p className="text-muted-foreground">Guaranteed delivery time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">
            Why Choose Pola Clip?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Professional Editing
              </h3>
              <p className="text-muted-foreground">
                Our team consists of experienced video editors who understand what makes content go viral. Every clip is crafted for maximum engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Fast Turnaround
              </h3>
              <p className="text-muted-foreground">
                We guarantee 48-hour delivery on all clips and 24-hour turnaround on revisions. Your time is valuable, and we respect that.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Transparent Pricing
              </h3>
              <p className="text-muted-foreground">
                No hidden fees. No surprises. You know exactly what you're getting with each package, and you can cancel anytime after month one.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Your Success Matters
              </h3>
              <p className="text-muted-foreground">
                We're invested in your growth. Every clip we create is designed to help you reach more people and build your audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Customized Approach
              </h3>
              <p className="text-muted-foreground">
                We understand that every creator is different. We tailor our approach to match your brand, style, and audience preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                Platform Optimization
              </h3>
              <p className="text-muted-foreground">
                We optimize every clip for Reels, Shorts, and TikTok. Vertical format, captions, pacing—everything is designed for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">
            Our Process
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                  Analyze Your Content
                </h3>
                <p className="text-muted-foreground">
                  We carefully review your video to identify the most engaging moments and key takeaways.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                  Create Engaging Clips
                </h3>
                <p className="text-muted-foreground">
                  We edit, add captions, include your branding, and optimize for each platform's specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                  Quality Check
                </h3>
                <p className="text-muted-foreground">
                  Every clip goes through our quality assurance process to ensure it meets our high standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                  Deliver & Support
                </h3>
                <p className="text-muted-foreground">
                  We deliver your clips and support any revisions you need within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Join creators who are growing with Pola Clip
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey to more views, more engagement, and more growth.
          </p>
          <Link href="/order">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              Get Started Today
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
            <Link href="/services">
              <a className="hover:text-primary transition-colors">Services</a>
            </Link>
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
