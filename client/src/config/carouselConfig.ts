/**
 * Owl Carousel Configuration
 * Reusable carousel settings for project galleries
 */

import type { CarouselOptions } from '../types/carouselTypes';

export const carouselOptions: CarouselOptions = {
  loop: true,
  margin: 0,
  nav: true,
  animateIn: "bounceInRight",
  animateOut: "bounceOutRight",
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
};
