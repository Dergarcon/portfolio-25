import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code, Database, Shield, Zap, Network, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Advanced Solidity Development',
    icon: Code,
    description: 'Expert-level smart contract patterns and optimizations',
    skills: [
      'Diamond Proxy Pattern',
      'Assembly Integration',
      'Gas Optimization',
      'Auditing',
      'Reverse Engineering',
      'Multi-contract Systems',
      'Shared Storage Patterns',
      'Custom Order Execution',
    ],
  },
  {
    title: 'MEV Infrastructure',
    icon: Network,
    description: 'Production MEV systems and custom client development',
    skills: [
      'Ethereum Client Development',
      'Transaction Simulation',
      'Bundle Simulation',
      'Order Flow Value Extraction',
      'Mempool Analysis',
      'Arbitrage Systems',
      'Liquidation Infrastructure',
      'Flash Loan Integration',
      'Production Trading Systems',
    ],
  },
  {
    title: 'DeFi Protocol Integration',
    icon: Zap,
    description: 'Deep integration with major DeFi protocols',
    skills: [
      'Uniswap V2/V3',
      'Compound',
      'Aave',
      'Curve',
      'SushiSwap',
      'Balancer V2',
      '1inch',
      'PancakeSwap V3',
      'DefiSwap',
      'SakeSwap',
      'ShibaSwap',
      '0x Protocol',
    ],
  },
  {
    title: 'Backend & Performance',
    icon: Database,
    description: 'High-performance systems for blockchain operations',
    skills: [
      'Python',
      'Cython',
      'Go',
      'Hardhat',
      'Foundry',
      'Node Infrastructure',
      'Event Monitoring',
      'Performance Tuning',
      'Intelligent Caching Mechanisms',
      'Event Driven Architecture',
    ],
  },
  {
    title: 'On-Chain Analytics',
    icon: Shield,
    description: 'Real-time monitoring and competitive analysis',
    skills: [
      'Profit Tracking',
      'Competitor Analysis',
      'Transaction Analysis',
      'Event Processing',
      'MEV Analytics',
      'Performance Metrics',
      'Infrastructure Monitoring',
      'Data Pipelines',
      'Automatic Report Generation',
    ],
  },
  {
    title: 'Strategy Development',
    icon: Globe,
    description: 'Multi-strategy MEV and trading systems',
    skills: [
      'Arbitrage Strategies',
      'Liquidation Bots',
      'Order Batching',
      'Offline Orderbooks',
      'Strategy Testing',
      'Profit Optimization',
      'Automation',
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 years specializing in MEV infrastructure and advanced Solidity
            development at SMG (acquired by ConsenSys), with deep expertise in
            DeFi protocol integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">MEV & DeFi Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">
                  Years at SMG
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">
                  1600+
                </div>
                <div className="text-sm text-muted-foreground">
                  Tokens Integrated
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  DeFi Protocols
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">0.5s</div>
                <div className="text-sm text-muted-foreground">
                  Block Advantage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
