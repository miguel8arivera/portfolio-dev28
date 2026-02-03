import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

// Mock dependencies
jest.mock('../../utilities/ScrollService', () => ({
  currentScreenFadeIn: {
    subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
  },
}));

jest.mock('../../utilities/Animations', () => ({
  animations: {
    fadeInScreen: jest.fn(),
  },
}));

describe('Projects Component', () => {
  beforeEach(() => {
    const ScrollService = require('../../utilities/ScrollService');
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: jest.fn(),
    }));
  });

  test('renders projects component with heading', () => {
    render(<Projects id="projects" />);

    expect(screen.getByText('A Bit of My Project')).toBeInTheDocument();
    expect(screen.getByText('E&P - IT Related')).toBeInTheDocument();
  });

  test('renders owl carousel', () => {
    render(<Projects id="projects" />);

    const carousel = screen.getByTestId('owl-carousel');
    expect(carousel).toBeInTheDocument();
  });

  test('displays all project cards', () => {
    render(<Projects id="projects" />);

    // Check for project titles
    expect(screen.getByText('E-commerce-app')).toBeInTheDocument();
    expect(screen.getAllByText('Portfolio-web').length).toBeGreaterThan(0);
  });

  test('displays project descriptions', () => {
    render(<Projects id="projects" />);

    expect(screen.getAllByText(/Construction of an E-commerce/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Creation of a web portfolio/i).length).toBeGreaterThan(0);
  });

  test('displays technology tags', () => {
    render(<Projects id="projects" />);

    const reactTags = screen.getAllByText('React');
    expect(reactTags.length).toBeGreaterThan(0);
  });

  test('renders quote icons for projects', () => {
    render(<Projects id="projects" />);

    const quoteLeftIcons = document.querySelectorAll('.fa-quote-left');
    const quoteRightIcons = document.querySelectorAll('.fa-quote-right');

    expect(quoteLeftIcons.length).toBeGreaterThan(0);
    expect(quoteRightIcons.length).toBeGreaterThan(0);
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<Projects id="projects" />);

    expect(container.querySelector('.project-section')).toBeInTheDocument();
    expect(container.querySelector('.fade-in')).toBeInTheDocument();
  });

  test('component cleans up subscription on unmount', () => {
    const unsubscribeMock = jest.fn();
    const ScrollService = require('../../utilities/ScrollService');
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: unsubscribeMock,
    }));

    const { unmount } = render(<Projects id="projects" />);
    unmount();

    expect(unsubscribeMock).toHaveBeenCalled();
  });

  test('renders with correct id prop', () => {
    const { container } = render(<Projects id="test-id" />);

    const section = container.querySelector('#test-id');
    expect(section).toBeInTheDocument();
  });
});
