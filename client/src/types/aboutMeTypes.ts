/**
 * About Me Type Definitions
 */

export interface AboutMeHighlights {
  heading: string;
  bullets: string[];
}

export interface AboutMeContent {
  description: string;
  highlights: AboutMeHighlights;
}
