// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock OwlCarousel globally
jest.mock('react-owl-carousel', () => {
  return function OwlCarousel({ children }) {
    return <div data-testid="owl-carousel">{children}</div>;
  };
});
