// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock OwlCarousel globally
vi.mock('react-owl-carousel', () => {
  return {
    default: ({ children }) => {
      return <div data-testid="owl-carousel">{children}</div>;
    }
  };
});
