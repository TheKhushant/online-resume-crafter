
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';

const ThemeToggle: React.FC = () => {
  // Try to get theme context, but provide fallback if not available
  try {
    const { theme, toggleTheme } = useTheme();
    
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className="rounded-full w-9 h-9 hover:text-cosmic-accent"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    );
  } catch (error) {
    // Return a disabled button as fallback when ThemeProvider is not available
    console.warn('ThemeToggle rendered without ThemeProvider context');
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        disabled
        className="rounded-full w-9 h-9 opacity-50"
        aria-label="Theme toggle (unavailable)"
      >
        <Sun size={20} />
      </Button>
    );
  }
};

export default ThemeToggle;
