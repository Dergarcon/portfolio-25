import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'MEV Searcher',
    description:
      'Production MEV bot specialized in atomic arbitrage, only executing transactions with guaranteed profit. The searcher supports 1600+ tokens across 10+ major DeFi protocols including Uniswap, Compound, Aave, Curve, and SushiSwap. The bot uses advanced arbitrage strategies like smart routing and bundle backrunning. The system leverages advanced Solidity techniques like Diamond Proxy Pattern, inline Assembly, and Gas Optimizations. The searcher can trade using its own funds for maximum gas efficiency or leverage flash loans and UniswapV3 flash swaps for larger opportunities. The bot includes its own price oracle allowing profit extraction in any arbitrary token. The searcher features time machine debugging using archive nodes.',
    businessImpact:
      'Atomic arbitrage bot with guaranteed profit execution and custom price oracle across 1600+ tokens',
    metrics: [
      { label: 'Tokens', value: '1600+', trend: 'up' as const },
      { label: 'Protocols', value: '10+', trend: 'up' as const },
      { label: 'Strategies', value: 'Multi', trend: 'up' as const },
      { label: 'Order Flow', value: 'Private', trend: 'up' as const },
    ],
    technologies: [
      'Solidity',
      'Python',
      'Cython',
      'Assembly',
      'Managed Redis',
      'Datadog',
      'AWS EC2',
      'MEVBlocker',
    ],
    liveDemo: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Custom Geth Fork (Open Source)',
    description:
      'Custom Ethereum client achieving 30% performance improvement and 0.5s block discovery advantage over Infura Premium nodes. Optimized for MEV operations with intelligent block data delivery, bytecode manipulation, and advanced bundle simulation features.',
    businessImpact:
      '30% faster bundle simulation with pre-computed MEV data delivery and bytecode manipulation on each new block',
    metrics: [
      { label: 'Bundle Simulation', value: '30% faster', trend: 'up' as const },
      { label: 'Block Advantage', value: '0.5s', trend: 'up' as const },
      { label: 'API Calls', value: 'Zero', trend: 'up' as const },
      { label: 'Data Delivery', value: 'Pre-computed', trend: 'up' as const },
    ],
    technologies: [
      'Go',
      'Geth',
      'Ethereum',
      'Bundle Simulation',
      'Bytecode Manipulation',
      'eth-docker',
      'AWS',
    ],
    liveDemo: '',
    githubUrl: 'https://github.com/Dergarcon/geth',
    featured: false,
  },
  {
    title: '0x-Inspired Trading Protocol',
    description:
      'Co-created custom trading protocol with offline orderbook and searcher-based execution system. Contributed to auditing, gas optimization, testing and debugging while designing and developing the architecture. Integrated it into our MEV searcher for deep testing and used in live demos.',
    businessImpact:
      'Offline orderbook with searcher backrunning for automated profit optimization',
    metrics: [
      { label: 'Order Type', value: 'Offline', trend: 'up' as const },
      { label: 'Execution', value: 'Searcher', trend: 'up' as const },
      { label: 'Simulation', value: 'No-sig', trend: 'up' as const },
      { label: 'Testing', value: 'Integrated', trend: 'up' as const },
    ],
    technologies: [
      'Solidity',
      '0x Protocol',
      'Order Matching',
      'MEV Integration',
      'Testing Suite',
    ],
    liveDemo: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'On-Chain Analytics & Monitoring Suite',
    description:
      'Built comprehensive on-chain analytics and monitoring suite with Datadog integration for MEV operations, profit tracking, and competitive analysis. Includes real-time monitoring of all major DeFi protocols and competitor strategies.',
    businessImpact:
      'Real-time profit tracking with competitor analysis for production MEV operations',
    metrics: [
      { label: 'Monitoring', value: 'Real-time', trend: 'up' as const },
      { label: 'Analysis', value: 'Competitive', trend: 'up' as const },
      { label: 'Infrastructure', value: 'AWS', trend: 'up' as const },
      { label: 'Uptime', value: 'High', trend: 'up' as const },
    ],
    technologies: [
      'Python',
      'Event Monitoring',
      'State Reading',
      'AWS',
      'Node Infrastructure',
      'Analytics',
    ],
    liveDemo: '',
    githubUrl: '',
    featured: false,
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            MEV Infrastructure & DeFi Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production MEV systems and advanced Solidity implementations from 5
            years at SMG, acquired by ConsenSys in 2023
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
      </div>
    </section>
  );
}
