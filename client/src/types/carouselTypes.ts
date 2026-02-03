/**
 * Carousel Configuration Type Definitions
 */

export interface CarouselResponsiveSettings {
  items: number;
}

export interface CarouselResponsive {
  [breakpoint: string]: CarouselResponsiveSettings;
  0: CarouselResponsiveSettings;
  768: CarouselResponsiveSettings;
  1000: CarouselResponsiveSettings;
}

export interface CarouselOptions {
  loop: boolean;
  margin: number;
  nav: boolean;
  animateIn: string;
  animateOut: string;
  dots: boolean;
  autoplay: boolean;
  smartSpeed: number;
  responsive: CarouselResponsive;
}
