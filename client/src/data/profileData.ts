/**
 * Profile Data
 * Contains social media links, role animations, and tagline
 */

import type {
  SocialMediaLink,
  ProfileInfo,
  RoleAnimationSequence,
} from '../types/profileTypes';

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/miguel-angel-ochoa-rivera-547750208/",
    icon: "fa fa-linkedin",
  },
  {
    id: 2,
    platform: "GitHub",
    url: "https://github.com/miguel8arivera",
    icon: "fa fa-github",
  },
  {
    id: 3,
    platform: "Twitter",
    url: "https://twitter.com/Dev28Miguel",
    icon: "fa fa-twitter",
  },
  {
    id: 4,
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100068604824809",
    icon: "fa fa-facebook-square",
  },
  {
    id: 5,
    platform: "Google Plus",
    url: "https://twitter.com/Dev28Miguel",
    icon: "fa fa-google-plus-square",
  },
];

export const roleAnimationSequence: RoleAnimationSequence = [
  "Enthusiastic Dev ❤️",
  1200,
  "Full Stack Developer 👨‍💻",
  1200,
  "MERN Stack Dev 💻",
  1200,
  "React Dev ✅",
  1200,
  "Cross Platform Dev 🔵",
  1200,
];

export const profileInfo: ProfileInfo = {
  name: "Miguel",
  tagline:
    "I am passionate about Front-End development, with a strong focus on the MERN stack.",
  cvFileName: "My Portfolio.pdf",
};
