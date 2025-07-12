import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Shield, Lightbulb, FileText } from 'lucide-react';

const teamworkAspects = [
  {
    icon: Users,
    title: 'Helping Others Grow',
    description:
      "I've onboarded 1 junior developer and 3 new team members on DeFi protocols and smart contract architecture, significantly reducing their onboarding time through a structured approach. I first showed them new concepts, then gave them small tasks to implement these ideas, and finally we debugged or optimized their solutions together in pair programming sessions. My approach focuses on building confidence alongside competence - I create safe environments for questions and mistakes, which has resulted in all of my colleagues successfully contributing to production code within their first month.",
  },
  {
    icon: BookOpen,
    title: 'Working with Non-Engineers',
    description:
      'Working with ConsenSys finance teams, I built an automated profit tracking system that monitors on-chain transactions. The system scales to any number of wallets and is currently tracking over 50 in production. The finance team was previously unable to read and understand complex arbitrage transactions at all - my system translates these complex DeFi mechanics into clear business metrics, making P&L tracking possible for the first time while eliminating the need for manual transaction categorization entirely.',
  },
  {
    icon: Shield,
    title: 'Building Secure Code',
    description: (
      <>
        I&apos;ve participated in smart contract audits with firms including{' '}
        <a
          href="https://www.nethermind.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Nethermind
        </a>{' '}
        for our trading protocol. As a developer owning my part of the codebase,
        I helped auditors understand our system during initial calls, remained
        available for questions during their review, and participated in
        findings presentations. We then discussed and implemented their
        recommendations, resulting in final audit artifacts. These audits were
        exclusively for the trading protocol - our MEV searcher remains highly
        confidential and has never been shared outside the core development
        team.
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: 'Simplicity Wins',
    description:
      "I believe in finding the simplest solution that works. When our MEV searcher's API batching logic for new block notifications became unstable and error-prone, I took a step back to rethink the architecture. Instead of patching the existing system, I built our own GETH fork that eliminated the need for external API calls entirely. The nodes could now process data directly and efficiently. This simpler architecture meant any team member could now understand and debug the system, eliminating the knowledge silo that had formed around the complex API logic.",
  },
  {
    icon: FileText,
    title: 'Remote-First Philosophy',
    description:
      "I prioritize unblocking my colleagues and keeping the overall project goals in mind rather than individual achievements. I work async-first to respect everyone's deep work time - I know how crucial it is to code without interruption for a few hours. I save synchronous calls for when they're truly necessary, though I value weekly standups to keep everyone aligned. When critical issues arise that can't wait, I'm always available for urgent calls. This balanced approach helps the team stay productive while maintaining the human connection that makes remote work sustainable.",
  },
];

export default function TeamworkSection() {
  return (
    <section id="teamwork" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            How I Work With Teams
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Beyond technical execution, I believe great blockchain solutions
            emerge from effective collaboration with cross-functional teams and
            stakeholders.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {teamworkAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    {aspect.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground leading-relaxed">
                    {aspect.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
