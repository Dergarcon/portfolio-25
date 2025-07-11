'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToBackground = () => {
    const backgroundSection = document.getElementById('background');
    if (backgroundSection) {
      backgroundSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
              Nick Marek
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              <span className="text-primary">Senior MEV Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
              5 years creating, optimizing & auditing production systems
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              formerly SMG (acquired by ConsenSys)
            </p>
          </div>

          <Button
            onClick={scrollToBackground}
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
          >
            See My Background
          </Button>
        </div>
      </div>
    </section>
  );
}
