import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function OrderNow() {
  const [selectedPackage, setSelectedPackage] = useState("growth");

  const packages = [
    {
      id: "starter",
      name: "Starter",
      monthlyClips: 12,
      originalPrice: 250,
      discountedPrice: 200,
      features: [
        "12 short clips per month",
        "Captions on all clips",
        "Client branding",
        "48-hour delivery",
        "24-hour revisions",
        "2 revision rounds",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      monthlyClips: 30,
      originalPrice: 500,
      discountedPrice: 400,
      features: [
        "30 short clips per month",
        "Captions on all clips",
        "Client branding",
        "48-hour delivery",
        "24-hour revisions",
        "2 revision rounds",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      monthlyClips: 70,
      originalPrice: 900,
      discountedPrice: 720,
      features: [
        "70 short clips per month",
        "Captions on all clips",
        "Custom thumbnails",
        "Client branding",
        "48-hour delivery",
        "24-hour revisions",
        "3 revision rounds",
      ],
    },
  ];

  const handleOrderClick = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    toast.info(`Ready to order ${pkg?.name}? This will redirect to payment.`);
    // In a real implementation, this would redirect to a payment processor
    // For now, we'll show a message
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            Choose Your <span className="text-primary">Package</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your content creation needs. First month is 20% off!
          </p>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all ${
                    selectedPackage === pkg.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={pkg.id} className="text-lg font-bold font-poppins cursor-pointer">
                        {pkg.name}
                      </Label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      ${pkg.discountedPrice}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="line-through">${pkg.originalPrice}</span> /month (first month)
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-foreground mb-4">
                    {pkg.monthlyClips} clips/month
                  </p>

                  <div className="space-y-2">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>

          {/* Order Summary */}
          <div className="bg-secondary p-8 rounded-xl border border-border mb-8">
            <h2 className="text-2xl font-bold font-poppins text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {packages.map((pkg) => {
                if (pkg.id !== selectedPackage) return null;
                return (
                  <div key={pkg.id}>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-bold text-foreground">{pkg.name} Package</h3>
                        <p className="text-sm text-muted-foreground">{pkg.monthlyClips} clips per month</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ${pkg.discountedPrice}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          First month (20% off)
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-border mb-4">
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Next billing:</strong> Regular price ${pkg.originalPrice}/month after first month
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Cancel anytime:</strong> No long-term contracts required
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">Payment Methods</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We currently accept payments via Stripe. We're working on adding more payment options including PayPal and direct bank transfers.
              </p>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Since you mentioned having a Wise account, please contact us at{" "}
                  <a href="mailto:hello@polaclip.com" className="text-primary hover:text-primary/80">
                    hello@polaclip.com
                  </a>{" "}
                  to discuss alternative payment arrangements.
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">Important Terms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 100% payment due before work begins for month 1</li>
                <li>✓ Month 2+: Payment due within 15 days of invoice (Net-15)</li>
                <li>✓ 48-hour delivery guaranteed on all clips</li>
                <li>✓ 24-hour revision turnaround</li>
                <li>✓ Cancel anytime after month 1</li>
                <li>✓ No refunds after clips are delivered and approved</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleOrderClick}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                size="lg"
              >
                Proceed to Payment
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 font-bold"
                  size="lg"
                >
                  Contact Us First
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-poppins text-foreground">
              Questions Before Ordering?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">How does billing work?</h3>
                <p className="text-sm text-muted-foreground">
                  First month is 20% off and due upfront. Subsequent months are billed on the regular price with Net-15 payment terms.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">Can I change packages?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! You can upgrade or downgrade your package anytime. Changes take effect the next billing cycle.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">What if I need custom terms?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us to discuss your specific needs. We're flexible and can work out custom arrangements.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-muted-foreground">
                  No refunds after clips are delivered and approved. However, you can cancel anytime after month 1.
                </p>
              </div>
            </div>

            <Link href="/how-it-works">
              <a className="text-primary hover:text-primary/80 font-semibold">
                View more FAQs →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 mt-20">
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
