import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

export default function Services() {
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your content creation needs. First month is 20% off on all plans.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
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

                  {/* CTA Button */}
                  <Link href="/order">
                    <Button
                      className={`w-full mb-8 font-bold ${
                        pkg.featured
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-foreground text-white hover:bg-foreground/90"
                      }`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>

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
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-poppins text-foreground mb-8">
            Payment & Terms
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-bold text-foreground mb-2">Payment Schedule</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Month 1: 100% payment due before any work begins</li>
                <li>Month 2 onward: Payment due within 15 days of invoice (Net-15)</li>
                <li>Late payment (after 15 days): Work pauses until payment is received</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Revisions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Starter & Growth: 2 revision rounds per month</li>
                <li>Pro: 3 revision rounds per month</li>
                <li>Additional revisions: Charged separately</li>
                <li>Revisions apply to existing footage only. New clip creation is a separate order.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Refunds & Cancellation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No refunds after clips are delivered and approved</li>
                <li>Cancel anytime after month 1 with no penalties</li>
              </ul>
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
            Choose your package and start creating viral clips today.
          </p>
          <Link href="/order">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              Order Now
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
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
