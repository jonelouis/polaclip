import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Upload, Scissors, Download, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload Your Video",
      description: "Send us your long-form content from YouTube, Facebook, Instagram, or any other platform. We accept videos up to any length.",
      icon: Upload,
    },
    {
      number: 2,
      title: "We Create the Clips",
      description: "Our professional editing team creates engaging short clips optimized for Reels, Shorts, and TikTok. We add captions, branding, and ensure maximum engagement.",
      icon: Scissors,
    },
    {
      number: 3,
      title: "Review & Revise",
      description: "You review the clips and request any revisions. We guarantee 24-hour turnaround on all revision requests. Your satisfaction is our priority.",
      icon: CheckCircle,
    },
    {
      number: 4,
      title: "Download & Post",
      description: "Download your ready-to-post clips in vertical format (9:16) and start posting to grow your audience across all short-form platforms.",
      icon: Download,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, straightforward process to transform your long-form videos into viral short clips.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-8">
                  {/* Left: Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold text-3xl font-poppins mb-4">
                      {step.number}
                    </div>
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    {idx < steps.length - 1 && (
                      <div className="w-1 h-24 bg-primary/20 mt-4" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold font-poppins text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">
            Timeline & Delivery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">48 Hours</div>
              <p className="text-muted-foreground">
                Initial clip delivery from the time you submit your video
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">24 Hours</div>
              <p className="text-muted-foreground">
                Revision turnaround time for any requested changes
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">Monthly</div>
              <p className="text-muted-foreground">
                Recurring delivery of clips based on your chosen package
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold font-poppins text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                What video formats do you accept?
              </h3>
              <p className="text-muted-foreground">
                We accept videos from YouTube, Facebook, Instagram, TikTok, and any standard video format. Just share the link or upload the file.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Can I request specific clips from my video?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! You can specify which sections of your video you'd like us to focus on, or let us find the best moments for engagement.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                What if I don't like the clips?
              </h3>
              <p className="text-muted-foreground">
                We offer revision rounds included in your package. You can request changes, and we'll deliver revised clips within 24 hours.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Do you add captions and branding?
              </h3>
              <p className="text-muted-foreground">
                Yes! All clips include professional captions burned in. We also add your logo and handle to every clip for brand consistency.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can cancel anytime after your first month. No long-term contracts or hidden fees.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">
                What about custom thumbnails?
              </h3>
              <p className="text-muted-foreground">
                Custom thumbnails are included in the Pro package. Starter and Growth packages focus on the clips themselves.
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
            Let's transform your content into viral clips. First month is 20% off.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              Request Your Sample
            </Button>
          </Link>
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
            <Link href="/contact">
              <a className="hover:text-primary transition-colors">Contact</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
