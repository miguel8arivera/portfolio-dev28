import { BehaviorSubject } from 'rxjs';
import { Theme, ThemeState } from './ThemeTypes';

export default class ThemeService {
  static currentThemeBroadcaster = new BehaviorSubject<ThemeState>({
    currentTheme: 'light'
  });

  static themeHandler = new ThemeService();

  private readonly THEME_STORAGE_KEY = 'portfolio-theme';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Determine initial theme: saved > system preference > light (default)
    let initialTheme: Theme = 'light';
    if (savedTheme === 'dark' || savedTheme === 'light') {
      initialTheme = savedTheme;
    } else if (systemPrefersDark) {
      initialTheme = 'dark';
    }

    this.setTheme(initialTheme);

    // Listen for changes in system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const currentSavedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
      if (!currentSavedTheme || (currentSavedTheme !== 'dark' && currentSavedTheme !== 'light')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme: Theme): void {
    console.log('Setting theme to:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.THEME_STORAGE_KEY, theme);
    ThemeService.currentThemeBroadcaster.next({ currentTheme: theme });
    console.log('Theme set. Document attribute:', document.documentElement.getAttribute('data-theme'));
  }

  toggleTheme(): void {
    const currentTheme = ThemeService.currentThemeBroadcaster.value.currentTheme;
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Toggling from', currentTheme, 'to', newTheme);
    this.setTheme(newTheme);
  }

  getCurrentTheme(): Theme {
    return ThemeService.currentThemeBroadcaster.value.currentTheme;
  }
}
