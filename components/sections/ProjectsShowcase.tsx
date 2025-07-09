import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Custom Geth Fork Implementation',
    description:
      'Optimized Ethereum client with custom consensus mechanisms and performance improvements for enterprise blockchain infrastructure.',
    businessImpact:
      'Reduced node sync time by 30%, saving $500K annually in infrastructure costs',
    metrics: [
      { label: 'Sync Speed', value: '30%', trend: 'up' as const },
      { label: 'Cost Savings', value: '$500K', trend: 'up' as const },
      { label: 'Uptime', value: '99.9%', trend: 'up' as const },
      { label: 'Nodes', value: '50+', trend: 'up' as const },
    ],
    technologies: [
      'Go',
      'Ethereum',
      'Geth',
      'Docker',
      'Kubernetes',
      'Prometheus',
    ],
    liveDemo: 'https://etherscan.io/address/0x...',
    githubUrl: 'https://github.com/your-username/custom-geth-fork',
    featured: true,
  },
  {
    title: 'DeFi Yield Optimization Protocol',
    description:
      'Automated yield farming protocol with smart contract vaults managing multi-strategy yield optimization across DeFi protocols.',
    businessImpact:
      '$15M TVL managed with zero security incidents over 18 months',
    metrics: [
      { label: 'TVL Managed', value: '$15M', trend: 'up' as const },
      { label: 'APY Average', value: '12.5%', trend: 'up' as const },
      { label: 'Security Score', value: '100%', trend: 'up' as const },
      { label: 'Strategies', value: '8', trend: 'up' as const },
    ],
    technologies: [
      'Solidity',
      'Hardhat',
      'Chainlink',
      'Compound',
      'Aave',
      'Uniswap V3',
    ],
    liveDemo: 'https://app.yourprotocol.com',
    githubUrl: 'https://github.com/your-username/defi-yield-protocol',
    featured: true,
  },
  {
    title: 'Gas Optimization Suite',
    description:
      'Smart contract gas optimization tools and libraries that reduce deployment and transaction costs by analyzing bytecode patterns.',
    businessImpact:
      'Reduced gas costs by 40% for client transactions, saving $200K monthly',
    metrics: [
      { label: 'Gas Reduction', value: '40%', trend: 'up' as const },
      { label: 'Monthly Savings', value: '$200K', trend: 'up' as const },
      { label: 'Contracts Optimized', value: '150+', trend: 'up' as const },
      { label: 'Clients', value: '12', trend: 'up' as const },
    ],
    technologies: [
      'Solidity',
      'Assembly',
      'Foundry',
      'Slither',
      'Mythril',
      'TypeScript',
    ],
    liveDemo: 'https://gas-optimizer.dev',
    githubUrl: 'https://github.com/your-username/gas-optimization-suite',
  },
  {
    title: 'Multi-Chain Bridge Infrastructure',
    description:
      'Secure cross-chain bridge enabling asset transfers between Ethereum, Polygon, and Arbitrum with automated liquidity management.',
    businessImpact:
      'Processed $50M in cross-chain transactions with 99.99% uptime',
    metrics: [
      { label: 'Volume', value: '$50M', trend: 'up' as const },
      { label: 'Uptime', value: '99.99%', trend: 'up' as const },
      { label: 'Chains', value: '3', trend: 'up' as const },
      { label: 'Avg Fee', value: '0.1%', trend: 'down' as const },
    ],
    technologies: [
      'Solidity',
      'Node.js',
      'Redis',
      'PostgreSQL',
      'Web3.py',
      'Ethers.js',
    ],
    liveDemo: 'https://bridge.yourprotocol.com',
    githubUrl: 'https://github.com/your-username/multichain-bridge',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready blockchain solutions with proven business impact
            and quantified results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              businessImpact={project.businessImpact}
              metrics={project.metrics}
              technologies={project.technologies}
              liveDemo={project.liveDemo}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to discuss how I can optimize your blockchain infrastructure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              Schedule Technical Discussion
            </button>
            <button className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
