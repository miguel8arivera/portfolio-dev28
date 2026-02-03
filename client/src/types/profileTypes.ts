/**
 * Profile Type Definitions
 */

export interface SocialMediaLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileInfo {
  name: string;
  tagline: string;
  cvFileName: string;
}

export type RoleAnimationSequence = Array<string | number>;
