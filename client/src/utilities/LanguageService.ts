import { BehaviorSubject } from 'rxjs';
import { Language, LanguageState } from './LanguageTypes';

export default class LanguageService {
  static currentLanguageBroadcaster = new BehaviorSubject<LanguageState>({
    currentLanguage: 'en'
  });
  static languageHandler = new LanguageService();

  private readonly LANGUAGE_STORAGE_KEY = 'portfolio-language';

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_STORAGE_KEY) as Language;

    // Detect browser language
    const browserLanguage = navigator.language.toLowerCase();
    const isSpanish = browserLanguage.startsWith('es');

    // Priority: saved preference > browser language > default (English)
    let initialLanguage: Language = 'en';
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      initialLanguage = savedLanguage;
    } else if (isSpanish) {
      initialLanguage = 'es';
    }

    this.setLanguage(initialLanguage);
  }

  setLanguage(language: Language): void {
    localStorage.setItem(this.LANGUAGE_STORAGE_KEY, language);
    LanguageService.currentLanguageBroadcaster.next({ currentLanguage: language });
  }

  toggleLanguage(): void {
    const currentLanguage = LanguageService.currentLanguageBroadcaster.value.currentLanguage;
    const newLanguage: Language = currentLanguage === 'en' ? 'es' : 'en';
    this.setLanguage(newLanguage);
  }

  getCurrentLanguage(): Language {
    return LanguageService.currentLanguageBroadcaster.value.currentLanguage;
  }
}
