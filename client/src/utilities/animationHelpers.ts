import { Language } from './LanguageTypes';
import { getTranslations } from '../translations';

/**
 * Get role animation sequence for TypeAnimation component
 * Returns array with alternating text and delay values
 */
export const getRoleAnimationSequence = (language: Language) => {
  const t = getTranslations(language);

  return [
    t.home.roleAnimations.enthusiasticDev,
    1200,
    t.home.roleAnimations.fullStackDev,
    1200,
    t.home.roleAnimations.mernStackDev,
    1200,
    t.home.roleAnimations.reactDev,
    1200,
    t.home.roleAnimations.crossPlatformDev,
    1200,
  ];
};

/**
 * Get contact animation sequence for TypeAnimation component
 * Returns array with alternating text and delay values
 */
export const getContactAnimationSequence = (language: Language) => {
  const t = getTranslations(language);

  return [
    t.contact.contactAnimations.haveDiscussion,
    1500,
    t.contact.contactAnimations.shareExperience,
    1500,
  ];
};
