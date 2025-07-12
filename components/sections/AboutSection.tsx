import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Building, Calendar, Trophy } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="background" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Background</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 years of deep MEV infrastructure experience at SMG, a startup that
            was acquired by ConsenSys in 2023
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 transition-shadow duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/profile-correct-head.jpg"
                    alt="Professional headshot"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-lg object-cover object-center border-2 border-primary/20"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      Nick Marek
                    </h3>
                  </div>
                  <CardTitle className="flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-primary" />
                    SMG (Acquired by ConsenSys)
                    <Badge variant="secondary">2020-2025</Badge>
                  </CardTitle>
                  <CardDescription>
                    MEV Infrastructure & DeFi Development Company
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Professional Experience
                </h3>
                <p className="text-muted-foreground">
                  As Senior MEV Engineer at SMG, I led the development of the
                  inhouse MEV searcher from inception to production scale. I
                  scaled the searcher to support over 1600 tokens, developed a
                  custom Geth fork achieving 30% performance improvements over
                  Infura Premium nodes, and integrated searcher and node with
                  all major DeFi protocols. Beyond core development, I managed
                  MEV searcher asset allocation and portfolio optimization,
                  integrated with exclusive order flow sources like MEVBlocker
                  and MetaMask Smart Transactions, and maintained our
                  infrastructure on AWS EC2 instances. I also managed team
                  multisig wallets for asset management, participated in smart
                  contract auditing processes with external auditors, and
                  developed comprehensive monitoring systems by combining
                  on-chain data and events with Datadog. My work spanned from
                  low-level blockchain optimizations to high-level trading
                  strategies, always focusing on production reliability and
                  profitability.
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  ConsenSys Acquisition (2023)
                </h3>
                <p className="text-muted-foreground mb-4">
                  SMG was acquired by ConsenSys in 2023, recognizing our
                  team&apos;s expertise in MEV infrastructure and DeFi protocol
                  development. Following the acquisition, I continued working on
                  advanced blockchain systems and maintained long-term contract
                  relationships with ConsenSys while expanding my expertise in
                  production MEV operations.
                </p>
                <div>
                  <a
                    href="https://consensys.io/blog/consensys-acquires-smg-to-deliver-state-of-the-art-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline text-sm"
                  >
                    Read the official ConsenSys acquisition announcement →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 transition-shadow duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="text-primary border-primary"
                >
                  Education
                </Badge>
                Hochschule für Technik Stuttgart
                <Badge variant="secondary">2020</Badge>
              </CardTitle>
              <CardDescription>
                Bachelor of Science in Business Informatics
                (Wirtschaftsinformatik)
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/30 rounded-lg transition-shadow duration-300 hover:shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">2020</div>
              <div className="text-muted-foreground">
                B.Sc. Business Informatics
              </div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg transition-shadow duration-300 hover:shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">2020</div>
              <div className="text-muted-foreground">Joined SMG</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg transition-shadow duration-300 hover:shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">2023</div>
              <div className="text-muted-foreground">ConsenSys Acquisition</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg transition-shadow duration-300 hover:shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">2025</div>
              <div className="text-muted-foreground">
                Open to New Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
