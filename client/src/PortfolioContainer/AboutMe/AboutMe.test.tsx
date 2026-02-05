import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from './AboutMe';
import ScrollService from '../../utilities/ScrollService';

// Mock dependencies
vi.mock('../../utilities/ScrollService', () => ({
  default: {
    currentScreenFadeIn: {
      subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
    },
    scrollHandler: {
      scrollToHireMe: vi.fn(),
    },
  },
}));

vi.mock('../../utilities/Animations', () => ({
  animations: {
    fadeInScreen: vi.fn(),
  },
}));

describe('AboutMe Component', () => {
  beforeEach(() => {
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: vi.fn(),
    }));
    ScrollService.scrollHandler.scrollToHireMe.mockClear();
  });

  test('renders about me component with heading', () => {
    render(<AboutMe id="about" />);

    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Why Choose Me?')).toBeInTheDocument();
  });

  test('displays description text', () => {
    render(<AboutMe id="about" />);

    expect(
      screen.getByText(/I am a passionate Full Stack Developer with expertise in building modern web applications/i)
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
      'Interactive Front End design',
      'React and React Native',
      'Building REST APIs',
      'Managing databases',
    ];

    highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
  });

  test('renders highlight bullets with correct structure', () => {
    const { container } = render(<AboutMe id="about" />);

    const highlights = container.querySelectorAll('.highlight');
    expect(highlights.length).toBe(5);

    const highlightBlobs = container.querySelectorAll('.highlight-blob');
    expect(highlightBlobs.length).toBe(5);
  });

  test('renders "Hire Me" button', () => {
    render(<AboutMe id="about" />);

    const hireMeButton = screen.getByText("Hire Me");
    expect(hireMeButton).toBeInTheDocument();
    expect(hireMeButton.closest('button')).toHaveClass('btn', 'primary-btn');
  });

  test('clicking "Hire Me" button calls scrollToHireMe', () => {
    render(<AboutMe id="about" />);

    const hireMeButton = screen.getByText("Hire Me");
    fireEvent.click(hireMeButton);

    expect(ScrollService.scrollHandler.scrollToHireMe).toHaveBeenCalled();
  });

  test('renders "Get Resume" button', () => {
    render(<AboutMe id="about" />);

    const resumeButton = screen.getByText('Get Resume');
    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton.closest('button')).toHaveClass('btn', 'highlighted-btn');
  });

  test('Resume download link has correct attributes', () => {
    render(<AboutMe id="about" />);

    const resumeLink = screen.getByText('Get Resume').closest('a');
    expect(resumeLink).toHaveAttribute('href', 'My Portfolio.pdf');
    expect(resumeLink).toHaveAttribute('download', 'My Portfolio.pdf');
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<AboutMe id="about" />);

    expect(container.querySelector('.about-me-container')).toBeInTheDocument();
    expect(container.querySelector('.screen-container')).toBeInTheDocument();
    expect(container.querySelector('.fade-in')).toBeInTheDocument();
  });

  test('component cleans up subscription on unmount', () => {
    const unsubscribeMock = vi.fn();
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
