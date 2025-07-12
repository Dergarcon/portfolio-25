'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/theme-context';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light' || theme === 'system') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    // Show icon based on the actual applied theme
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
  };

  const getAriaLabel = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return `Switch to ${isDark ? 'light' : 'dark'} theme`;
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label={getAriaLabel()}
    >
      {getIcon()}
    </Button>
  );
}
