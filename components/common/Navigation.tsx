'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'work-preferences', label: 'What I Want' },
  { id: 'teamwork', label: 'Teamwork' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const { scrollToElement } = useSmoothScroll();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1" />
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToElement(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
