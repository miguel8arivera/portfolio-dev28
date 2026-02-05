// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Mock OwlCarousel globally
vi.mock('react-owl-carousel', () => {
  return {
    default: ({ children }) => {
      return <div data-testid="owl-carousel">{children}</div>;
    }
  };
});

// Mock useTranslation hook
vi.mock('./hooks/useTranslation', () => ({
  useTranslation: () => ({
    t: {
      nav: {
        home: 'Home',
        aboutMe: 'About Me',
        resume: 'Resume',
        projects: 'Projects',
        contactMe: 'Contact Me',
      },
      home: {
        greeting: 'Hello, I am',
        role: 'Full Stack Developer',
        tagline: 'Building scalable and modern web applications',
        hireMe: 'Hire Me',
        getResume: 'Get Resume',
      },
      aboutMe: {
        title: 'About Me',
        subTitle: 'Why Choose Me?',
        description: 'I am a passionate Full Stack Developer with expertise in building modern web applications.',
        highlights: 'Here are a Few Highlights:',
        whyChooseMe: [
          'Full Stack web development',
          'Interactive Front End design',
          'React and React Native',
          'Building REST APIs',
          'Managing databases',
        ],
        hireMe: 'Hire Me',
        getResume: 'Get Resume',
      },
      resume: {
        title: 'Resume',
        subTitle: 'My Formal Bio Details',
        sections: {
          education: 'Education',
          workHistory: 'Work History',
          programmingSkills: 'Programming Skills',
          projects: 'Projects',
          interests: 'Interests',
        },
      },
      projects: {
        title: 'Projects',
        subTitle: 'My Creative Works',
      },
      contact: {
        title: 'Contact Me',
        subTitle: 'Let\'s Keep In Touch',
        description: 'Send me a message and I\'ll get back to you as soon as possible!',
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        sendButton: 'Send',
        toast: {
          success: 'Thank you for contacting Miguel!',
          error: 'Failed to send message. Please try again.',
          invalidEmail: 'Please enter a valid email address',
          invalidName: 'Please enter a valid name (letters only)',
          fillAll: 'Please fill all the fields',
          malicious: 'Invalid input detected. Please remove special characters.',
        },
      },
    },
    language: 'en',
  }),
}));
