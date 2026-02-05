import { Language, Translations } from '../utilities/LanguageTypes';
import { en } from './en';
import { es } from './es';

const translations: Record<Language, Translations> = {
  en,
  es,
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en;
};

export { en, es };
