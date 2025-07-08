'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            I&apos;ve optimized Ethereum infrastructure
            <br />
            <span className="text-primary">saving companies $2M+</span>
            <br />
            in gas costs
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            5 years building DeFi protocols managing{' '}
            <span className="font-semibold text-foreground">$50M+ TVL</span>
          </p>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Custom Geth fork achieving 30% faster sync times
            </div>
          </div>

          <Button
            onClick={scrollToProjects}
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            See My Impact
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">
                Faster Sync Times
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">TVL Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">
                Security Incidents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
