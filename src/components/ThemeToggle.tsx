import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  theme: Theme;
  isDarkMode: boolean;
  onThemeChange: (theme: Theme) => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  theme, 
  isDarkMode, 
  onThemeChange, 
  className = '' 
}) => {
  const themes: Array<{ value: Theme; icon: React.ElementType; label: string }> = [
    { value: 'light', icon: Sun, label: 'Light mode' },
    { value: 'dark', icon: Moon, label: 'Dark mode' },
    { value: 'system', icon: Monitor, label: 'System preference' }
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          onThemeChange(themes[nextIndex].value);
        }}
        className="btn-secondary group relative"
        aria-label={`Current theme: ${currentTheme.label}. Click to cycle themes.`}
        title={`Switch theme (currently ${currentTheme.label})`}
      >
        <currentTheme.icon 
          className="w-5 h-5 text-black transition-transform duration-300" 
          aria-hidden="true"
        />
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {currentTheme.label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>

      {/* Screen reader only theme status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Theme changed to {currentTheme.label}
      </div>
    </div>
  );
};

export default ThemeToggle;