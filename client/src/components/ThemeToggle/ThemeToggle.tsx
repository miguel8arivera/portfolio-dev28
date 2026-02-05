import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ThemeService from '../../utilities/ThemeService';
import { Theme } from '../../utilities/ThemeTypes';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    console.log('ThemeToggle mounted');
    const themeSubscription = ThemeService.currentThemeBroadcaster.subscribe(
      (themeState) => {
        console.log('Theme changed to:', themeState.currentTheme);
        setTheme(themeState.currentTheme);
      }
    );

    return () => {
      console.log('ThemeToggle unmounting');
      themeSubscription.unsubscribe();
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling to header-container
    console.log('Toggle clicked! Current theme:', theme);
    ThemeService.themeHandler.toggleTheme();
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <FontAwesomeIcon
        icon={theme === 'light' ? faMoon : faSun}
        className="theme-toggle-icon"
      />
    </button>
  );
}
