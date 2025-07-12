'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/theme-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Update isDark state based on the actual applied theme
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };

    // Check theme on mount
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    return () => observer.disconnect();
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light' || theme === 'system') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
