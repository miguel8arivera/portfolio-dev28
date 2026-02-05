import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';

// Mock TypeAnimation
vi.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence }: any) => (
    <span data-testid="type-animation">{sequence[0]}</span>
  ),
}));

// Mock ScrollService
vi.mock('../../../utilities/ScrollService', () => ({
  scrollHandler: {
    scrollToHireMe: vi.fn(),
  },
}));

describe('Profile Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders profile component', () => {
    render(<Profile />);

    expect(screen.getByText(/Hello, I'm/i)).toBeInTheDocument();
    expect(screen.getByText('Miguel')).toBeInTheDocument();
  });

  test('displays animated role text', () => {
    render(<Profile />);

    const typeAnimation = screen.getByTestId('type-animation');
    expect(typeAnimation).toBeInTheDocument();
    expect(typeAnimation).toHaveTextContent('Enthusiastic Dev ❤️');
  });

  test('displays professional tagline', () => {
    render(<Profile />);

    expect(
      screen.getByText(/I am passionate about Front-End development/i)
    ).toBeInTheDocument();
  });

  test('renders all social media links', () => {
    const { container } = render(<Profile />);

    const socialLinks = container.querySelectorAll('.colz-icon a');
    expect(socialLinks.length).toBe(5);
  });

  test('social media links have correct aria-labels', () => {
    const { container } = render(<Profile />);

    const socialLinks = container.querySelectorAll('.colz-icon a');
    const ariaLabels = Array.from(socialLinks).map(
      (link) => link.getAttribute('aria-label')
    );

    expect(ariaLabels).toContain('LinkedIn');
    expect(ariaLabels).toContain('GitHub');
    expect(ariaLabels).toContain('Twitter');
    expect(ariaLabels).toContain('Facebook');
    expect(ariaLabels).toContain('Google Plus');
  });

  test('social media links have correct href attributes', () => {
    const { container } = render(<Profile />);

    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/miguel-angel-ochoa-rivera-547750208/'
    );

    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/miguel8arivera');
  });

  test('renders "Let\'s Discuss!" button', () => {
    render(<Profile />);

    const discussButton = screen.getByText("Let's Discuss!");
    expect(discussButton).toBeInTheDocument();
    expect(discussButton.closest('button')).toHaveClass('btn', 'primary-btn');
  });

  test('clicking "Let\'s Discuss!" calls scrollToHireMe', () => {
    const ScrollService = require('../../../utilities/ScrollService');
    render(<Profile />);

    const discussButton = screen.getByText("Let's Discuss!");
    fireEvent.click(discussButton);

    expect(ScrollService.scrollHandler.scrollToHireMe).toHaveBeenCalled();
  });

  test('renders "Get CV" button', () => {
    render(<Profile />);

    const cvButton = screen.getByText('Get CV');
    expect(cvButton).toBeInTheDocument();
    expect(cvButton.closest('button')).toHaveClass('btn', 'highlighted-btn');
  });

  test('CV download link has correct attributes', () => {
    render(<Profile />);

    const cvLink = screen.getByText('Get CV').closest('a');
    expect(cvLink).toHaveAttribute('href', 'My Portfolio.pdf');
    expect(cvLink).toHaveAttribute('download', 'My Portfolio.pdf');
  });

  test('renders social media icons with correct classes', () => {
    const { container } = render(<Profile />);

    expect(container.querySelector('.fa-linkedin')).toBeInTheDocument();
    expect(container.querySelector('.fa-github')).toBeInTheDocument();
    expect(container.querySelector('.fa-twitter')).toBeInTheDocument();
    expect(container.querySelector('.fa-facebook-square')).toBeInTheDocument();
    expect(container.querySelector('.fa-google-plus-square')).toBeInTheDocument();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<Profile />);

    expect(container.querySelector('.profile-container')).toBeInTheDocument();
    expect(container.querySelector('.profile-parent')).toBeInTheDocument();
    expect(container.querySelector('.profile-details')).toBeInTheDocument();
    expect(container.querySelector('.profile-picture')).toBeInTheDocument();
  });

  test('name is highlighted', () => {
    const { container } = render(<Profile />);

    const highlightedName = container.querySelector('.highlighted-text');
    expect(highlightedName).toHaveTextContent('Miguel');
  });
});
