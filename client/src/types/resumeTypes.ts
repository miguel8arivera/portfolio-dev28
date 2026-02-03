/**
 * Resume Type Definitions
 */

export interface ResumeBullet {
  label: string;
  logoSrc: string;
}

export interface Skill {
  skill: string;
  ratingPercentage: number;
}

export interface ProjectDuration {
  fromDate: string;
  toDate: string;
}

export interface Project {
  title: string;
  duration: ProjectDuration;
  description: string;
  subHeading: string;
}

export interface Education {
  heading: string;
  subHeading: string;
  fromDate: string;
  toDate: string;
}

export interface WorkExperience {
  heading: string;
  subHeading: string;
  fromDate: string;
  toDate: string;
  descriptions: string[];
}

export interface Interest {
  heading: string;
  description: string;
}
