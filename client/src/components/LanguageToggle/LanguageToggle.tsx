import React, { useState, useEffect } from 'react';
import LanguageService from '../../utilities/LanguageService';
import { Language } from '../../utilities/LanguageTypes';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const languageSubscription = LanguageService.currentLanguageBroadcaster.subscribe(
      (languageState) => {
        setLanguage(languageState.currentLanguage);
      }
    );

    return () => {
      languageSubscription.unsubscribe();
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    LanguageService.languageHandler.toggleLanguage();
  };

  return (
    <button
      className="language-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <span className="language-code">{language.toUpperCase()}</span>
    </button>
  );
}
