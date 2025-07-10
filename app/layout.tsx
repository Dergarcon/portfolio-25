import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Senior Solidity Engineer | MEV Infrastructure & DeFi Specialist',
  description:
    '5 years of MEV/DeFi infrastructure experience at SMG (acquired by ConsenSys). Expert in advanced Solidity, custom Geth forks, and DeFi protocol integration. 1600+ tokens, 10+ protocols supported.',
  keywords:
    'Solidity, MEV, DeFi, Ethereum, Smart Contracts, SMG, ConsenSys, Diamond Proxy, Assembly, Gas Optimization, Datadog',
  openGraph: {
    title: 'Senior Solidity Engineer | MEV Infrastructure Specialist',
    description:
      'Expert MEV/DeFi engineer with 5 years at SMG (acquired by ConsenSys). Custom Geth fork with intelligent block data delivery.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
