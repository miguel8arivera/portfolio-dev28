import { Language } from './LanguageTypes';
import { getTranslations } from '../translations';

/**
 * Get translated projects data
 */
export const getTranslatedProjects = (language: Language) => {
  const t = getTranslations(language);

  return t.projects.projectsList.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    technology: 'React', // Technology names don't translate
  }));
};

/**
 * Get translated education data
 */
export const getTranslatedEducation = (language: Language) => {
  const t = getTranslations(language);

  return t.resume.educationList.map((edu, index) => ({
    ...edu,
    fromDate: index === 0 ? '2012' : '2020',
    toDate: index === 0 ? '2015' : '2022',
  }));
};

/**
 * Get translated work experience data
 */
export const getTranslatedWorkExperience = (language: Language) => {
  const t = getTranslations(language);

  return {
    ...t.resume.workExperience,
    fromDate: '2020',
    toDate: 'Present',
  };
};

/**
 * Get translated projects details for resume
 */
export const getTranslatedProjectsDetails = (language: Language) => {
  const t = getTranslations(language);

  return t.resume.projectsList.map((project, index) => ({
    title: project.title,
    duration: {
      fromDate: index === 0 ? '2021' : '2022',
      toDate: index === 0 ? 'June 2022' : 'present',
    },
    description: project.description,
    subHeading: project.subHeading,
  }));
};

/**
 * Get translated interests data
 */
export const getTranslatedInterests = (language: Language) => {
  const t = getTranslations(language);

  return t.resume.interestsList;
};
