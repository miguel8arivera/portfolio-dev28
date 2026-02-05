import { useState, useEffect } from 'react';
import LanguageService from '../utilities/LanguageService';
import { getTranslations } from '../translations';
import { Translations, Language } from '../utilities/LanguageTypes';

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>(getTranslations('en'));

  useEffect(() => {
    const languageSubscription = LanguageService.currentLanguageBroadcaster.subscribe(
      (languageState) => {
        setLanguage(languageState.currentLanguage);
        setTranslations(getTranslations(languageState.currentLanguage));
      }
    );

    return () => {
      languageSubscription.unsubscribe();
    };
  }, []);

  return { t: translations, language };
};
