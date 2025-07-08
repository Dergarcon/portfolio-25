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
    title: 'Blockchain Protocols',
    icon: Network,
    description: 'Core blockchain development and protocol optimization',
    skills: [
      'Ethereum',
      'Custom Geth Forks',
      'Layer 2 Solutions',
      'Polygon',
      'Arbitrum',
      'Optimism',
      'Consensus Mechanisms',
      'EVM Optimization',
    ],
  },
  {
    title: 'Smart Contract Development',
    icon: Code,
    description: 'Production-ready smart contracts with security focus',
    skills: [
      'Solidity',
      'Vyper',
      'Assembly',
      'Hardhat',
      'Foundry',
      'Remix',
      'OpenZeppelin',
      'Upgradeable Contracts',
    ],
  },
  {
    title: 'DeFi Protocols',
    icon: Zap,
    description: 'Deep expertise in decentralized finance ecosystems',
    skills: [
      'Uniswap V2/V3',
      'Compound',
      'Aave',
      'Curve',
      'Balancer',
      'Yield Farming',
      'Liquidity Mining',
      'AMM Design',
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    icon: Database,
    description: 'Scalable blockchain infrastructure and monitoring',
    skills: [
      'Node.js',
      'Go',
      'Python',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'Redis',
      'PostgreSQL',
    ],
  },
  {
    title: 'Security & Auditing',
    icon: Shield,
    description: 'Smart contract security and formal verification',
    skills: [
      'Slither',
      'Mythril',
      'Echidna',
      'Formal Verification',
      'Audit Reports',
      'Penetration Testing',
      'Code Review',
      'Risk Assessment',
    ],
  },
  {
    title: 'Web3 Development',
    icon: Globe,
    description: 'Full-stack Web3 applications and integrations',
    skills: [
      'Web3.js',
      'Ethers.js',
      'Wagmi',
      'RainbowKit',
      'IPFS',
      'TheGraph',
      'Chainlink',
      'Metamask Integration',
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years of hands-on experience with cutting-edge blockchain
            technologies and production-ready DeFi solutions
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
            <h3 className="text-2xl font-bold mb-8">Experience Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years DeFi Experience
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">
                  Smart Contracts Deployed
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">
                  $65M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Value Secured
                </div>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">
                  Critical Vulnerabilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
