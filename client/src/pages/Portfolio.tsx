import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Sample Work 1",
      creator: "Coming Soon",
      platform: "YouTube Shorts",
      niche: "Business",
      sourceUrl: "#",
      description: "Portfolio clips will be added as we complete projects for clients.",
    },
    {
      id: 2,
      title: "Sample Work 2",
      creator: "Coming Soon",
      platform: "Instagram Reels",
      niche: "Fitness",
      sourceUrl: "#",
      description: "Each clip showcases our editing quality and creative approach.",
    },
    {
      id: 3,
      title: "Sample Work 3",
      creator: "Coming Soon",
      platform: "TikTok",
      niche: "Finance",
      sourceUrl: "#",
      description: "We transform long-form content into engaging short clips.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white via-white to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See examples of the high-quality short clips we create for our clients. Each clip is optimized for maximum engagement on Reels, Shorts, and TikTok.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Video Clip</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  {/* Metadata */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Creator:</span>
                      <span className="font-semibold text-foreground">{item.creator}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform:</span>
                      <span className="font-semibold text-foreground">{item.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Niche:</span>
                      <span className="font-semibold text-foreground">{item.niche}</span>
                    </div>
                  </div>

                  {/* Source Link */}
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm"
                  >
                    View Original Source
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 p-12 bg-secondary rounded-xl text-center">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              More Portfolio Items Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              As we complete projects for clients, we'll showcase our best work here. Each clip demonstrates our commitment to quality editing, creative storytelling, and platform optimization.
            </p>
            <p className="text-sm text-muted-foreground">
              All portfolio items are labeled as "Sample Work" and are created from publicly available videos for demonstration purposes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to see your content transformed?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create viral clips from your videos and grow your audience.
          </p>
          <Link href="/#pricing">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors">
              Request Your Free Sample
            </a>
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
