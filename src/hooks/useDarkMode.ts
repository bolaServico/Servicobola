import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface UseDarkModeReturn {
  isDarkMode: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleDarkMode: () => void;
}

export const useDarkMode = (): UseDarkModeReturn => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      return savedTheme;
    }
    return 'system';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to get the effective theme (resolving 'system' to actual preference)
  const getEffectiveTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return currentTheme;
  };

  // Update DOM and state when theme changes
  const updateTheme = (newTheme: Theme) => {
    const effectiveTheme = getEffectiveTheme(newTheme);
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add new theme class
    root.classList.add(effectiveTheme);
    
    // Update CSS custom properties
    if (effectiveTheme === 'dark') {
      root.style.setProperty('--color-scheme', 'dark');
    } else {
      root.style.setProperty('--color-scheme', 'light');
    }
    
    // Update state
    setIsDarkMode(effectiveTheme === 'dark');
    setThemeState(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        effectiveTheme === 'dark' ? '#111827' : '#ffffff'
      );
    }
  };

  // Set theme function
  const setTheme = (newTheme: Theme) => {
    updateTheme(newTheme);
  };

  // Toggle between light and dark (skips system)
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    updateTheme(newTheme);
  };

  // Initialize theme on mount
  useEffect(() => {
    updateTheme(theme);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return {
    isDarkMode,
    theme,
    setTheme,
    toggleDarkMode
  };
};