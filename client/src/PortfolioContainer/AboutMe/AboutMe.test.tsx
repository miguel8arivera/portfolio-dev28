import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from './AboutMe';

// Mock dependencies
vi.mock('../../utilities/ScrollService', () => ({
  currentScreenFadeIn: {
    subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
  },
  scrollHandler: {
    scrollToHireMe: vi.fn(),
  },
}));

vi.mock('../../utilities/Animations', () => ({
  animations: {
    fadeInScreen: vi.fn(),
  },
}));

describe('AboutMe Component', () => {
  beforeEach(() => {
    const ScrollService = require('../../utilities/ScrollService');
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: vi.fn(),
    }));
    ScrollService.scrollHandler.scrollToHireMe.mockClear();
  });

  test('renders about me component with heading', () => {
    render(<AboutMe id="about" />);

    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('My Portfolio Overview')).toBeInTheDocument();
  });

  test('displays description text', () => {
    render(<AboutMe id="about" />);

    expect(
      screen.getByText(/I am a self-taught professional with a great passion for technology/i)
    ).toBeInTheDocument();
  });

  test('displays highlights heading', () => {
    render(<AboutMe id="about" />);

    expect(screen.getByText('Here are a Few Highlights:')).toBeInTheDocument();
  });

  test('renders all highlight bullets', () => {
    render(<AboutMe id="about" />);

    const highlights = [
      'Full Stack web development',
      'Interactive Front End as per the design',
      'React MongoDb Nextjs',
      'Redux for State Management',
      'Building REST API',
      'Managing database',
    ];

    highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
  });

  test('renders highlight bullets with correct structure', () => {
    const { container } = render(<AboutMe id="about" />);

    const highlights = container.querySelectorAll('.highlight');
    expect(highlights.length).toBe(6);

    const highlightBlobs = container.querySelectorAll('.highlight-blob');
    expect(highlightBlobs.length).toBe(6);
  });

  test('renders "Let\'s Discuss!" button', () => {
    render(<AboutMe id="about" />);

    const discussButton = screen.getByText("Let's Discuss!");
    expect(discussButton).toBeInTheDocument();
    expect(discussButton.closest('button')).toHaveClass('btn', 'primary-btn');
  });

  test('clicking "Let\'s Discuss!" button calls scrollToHireMe', () => {
    const ScrollService = require('../../utilities/ScrollService');
    render(<AboutMe id="about" />);

    const discussButton = screen.getByText("Let's Discuss!");
    fireEvent.click(discussButton);

    expect(ScrollService.scrollHandler.scrollToHireMe).toHaveBeenCalled();
  });

  test('renders "Get CV" button', () => {
    render(<AboutMe id="about" />);

    const cvButton = screen.getByText('Get CV');
    expect(cvButton).toBeInTheDocument();
    expect(cvButton.closest('button')).toHaveClass('btn', 'highlighted-btn');
  });

  test('CV download link has correct attributes', () => {
    render(<AboutMe id="about" />);

    const cvLink = screen.getByText('Get CV').closest('a');
    expect(cvLink).toHaveAttribute('href', 'My Portfolio.pdf');
    expect(cvLink).toHaveAttribute('download', 'My Portfolio.pdf');
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<AboutMe id="about" />);

    expect(container.querySelector('.about-me-container')).toBeInTheDocument();
    expect(container.querySelector('.screen-container')).toBeInTheDocument();
    expect(container.querySelector('.fade-in')).toBeInTheDocument();
  });

  test('component cleans up subscription on unmount', () => {
    const unsubscribeMock = vi.fn();
    const ScrollService = require('../../utilities/ScrollService');
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: unsubscribeMock,
    }));

    const { unmount } = render(<AboutMe id="about" />);
    unmount();

    expect(unsubscribeMock).toHaveBeenCalled();
  });

  test('renders with correct id prop', () => {
    const { container } = render(<AboutMe id="test-id" />);

    const section = container.querySelector('#test-id');
    expect(section).toBeInTheDocument();
  });
});
