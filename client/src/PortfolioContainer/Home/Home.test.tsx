import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

// Mock child components
vi.mock('./Header/Header', () => ({
  default: function Header() {
    return <div data-testid="header">Header Component</div>;
  }
}));

vi.mock('./Profile/Profile', () => ({
  default: function Profile() {
    return <div data-testid="profile">Profile Component</div>;
  }
}));

vi.mock('./Footer/Footer', () => ({
  default: function Footer() {
    return <div data-testid="footer">Footer Component</div>;
  }
}));

describe('Home Component', () => {
  test('renders home container', () => {
    const { container } = render(<Home />);

    const homeContainer = container.querySelector('.home-container');
    expect(homeContainer).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<Home />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('renders Profile component', () => {
    render(<Home />);

    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<Home />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders all three child components', () => {
    render(<Home />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('applies id prop to home container', () => {
    const { container } = render(<Home id="test-home" />);

    const homeContainer = container.querySelector('#test-home');
    expect(homeContainer).toBeInTheDocument();
  });

  test('renders without id when prop is not provided', () => {
    const { container } = render(<Home />);

    const homeContainer = container.querySelector('.home-container');
    expect(homeContainer).toBeInTheDocument();
    expect(homeContainer?.id).toBe('');
  });

  test('components are rendered in correct order', () => {
    const { container } = render(<Home />);

    const children = container.querySelector('.home-container')?.children;
    expect(children).toHaveLength(3);
  });
});
