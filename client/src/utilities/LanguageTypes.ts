export type Language = 'en' | 'es';

export interface LanguageState {
  currentLanguage: Language;
}

export interface Translations {
  // Navigation
  nav: {
    home: string;
    aboutMe: string;
    resume: string;
    projects: string;
    contactMe: string;
  };

  // Home/Profile
  home: {
    greeting: string;
    role: string;
    tagline: string;
    hireMe: string;
    getResume: string;
    // Role animations
    roleAnimations: {
      enthusiasticDev: string;
      fullStackDev: string;
      mernStackDev: string;
      reactDev: string;
      crossPlatformDev: string;
    };
  };

  // About Me
  aboutMe: {
    title: string;
    subTitle: string;
    description: string;
    highlights: string;
    whyChooseMe: string[];
    hireMe: string;
    getResume: string;
  };

  // Resume
  resume: {
    title: string;
    subTitle: string;
    education: string;
    workHistory: string;
    programmingSkills: string;
    applicationSkills: string;
    projects: string;
    interests: string;
    // Content
    educationList: Array<{
      heading: string;
      subHeading: string;
    }>;
    workExperience: {
      heading: string;
      subHeading: string;
      descriptions: string[];
    };
    projectsList: Array<{
      title: string;
      description: string;
      subHeading: string;
    }>;
    interestsList: Array<{
      heading: string;
      description: string;
    }>;
  };

  // Projects
  projects: {
    title: string;
    subTitle: string;
    visitButton: string;
    projectsList: Array<{
      title: string;
      description: string;
    }>;
  };

  // Contact Me
  contact: {
    title: string;
    subTitle: string;
    description: string;
    // Contact animations
    contactAnimations: {
      haveDiscussion: string;
      shareExperience: string;
    };
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    // Validation messages
    validation: {
      fillAllFields: string;
      invalidName: string;
      invalidEmail: string;
      securityError: string;
      nameMalicious: string;
      emailMalicious: string;
      messageMalicious: string;
    };
    // Toast messages
    toast: {
      success: string;
      error: string;
      fillFields: string;
      invalidName: string;
      invalidEmail: string;
      securityError: string;
    };
  };

  // Footer
  footer: {
    backToTop: string;
  };
}
