import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Resume from './Resume';
import ScrollService from '../../utilities/ScrollService';

// Mock dependencies
vi.mock('../../utilities/ScrollService', () => ({
  default: {
    currentScreenFadeIn: {
      subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
    },
  },
}));

vi.mock('../../utilities/Animations', () => ({
  animations: {
    fadeInScreen: vi.fn(),
  },
}));

describe('Resume Component', () => {
  beforeEach(() => {
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: vi.fn(),
    }));
  });

  test('renders resume component with title', () => {
    render(<Resume id="resume" />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('My Formal Bio Details')).toBeInTheDocument();
  });

  test('renders all resume section bullets', () => {
    render(<Resume id="resume" />);

    const bullets = [
      'Education',
      'Work History',
      'Programming Skills',
      'Application Skills',
      'Projects',
      'Interests',
    ];

    bullets.forEach((bullet) => {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    });
  });

  test('displays education section by default', () => {
    render(<Resume id="resume" />);
    expect(screen.getByText('University Jorge Basadre Grohmann, Peru')).toBeInTheDocument();
    expect(screen.getByText('freeCodeCamp, USA')).toBeInTheDocument();
  });

  test('changes section when bullet is clicked', () => {
    render(<Resume id="resume" />);

    // Click on Programming Skills bullet
    const programmingSkillsBullet = screen.getByText('Programming Skills');
    fireEvent.click(programmingSkillsBullet);

    // Check if programming skills are displayed
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('displays programming skills with correct percentages', () => {
    render(<Resume id="resume" />);

    // Click on Programming Skills
    fireEvent.click(screen.getByText('Programming Skills'));

    // Check that skill bars are rendered
    const skillBars = document.querySelectorAll('.active-percentage-bar');
    expect(skillBars.length).toBeGreaterThan(0);
  });

  test('switches to projects section', () => {
    render(<Resume id="resume" />);

    // Click on Projects bullet
    fireEvent.click(screen.getByText('Projects'));

    // Check if projects are displayed
    expect(screen.getAllByText('Budget-app').length).toBeGreaterThan(0);
    expect(screen.getAllByText('E-commerce').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Instagram-clone').length).toBeGreaterThan(0);
  });

  test('switches to interests section', () => {
    render(<Resume id="resume" />);

    // Click on Interests bullet
    fireEvent.click(screen.getByText('Interests'));

    // Check if interests are displayed
    expect(screen.getByText('Sports')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();
    expect(screen.getByText('Learner')).toBeInTheDocument();
  });

  test('applies selected-bullet class to active bullet', () => {
    render(<Resume id="resume" />);

    const workHistoryBullet = screen.getByText('Work History').closest('.bullet');
    fireEvent.click(screen.getByText('Work History'));

    expect(workHistoryBullet).toHaveClass('selected-bullet');
  });

  test('displays work experience details', () => {
    render(<Resume id="resume" />);

    // Click on Work History
    fireEvent.click(screen.getByText('Work History'));

    expect(screen.getByText('Realized projects in React and Nodejs')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Dev')).toBeInTheDocument();
  });

  test('component cleans up subscription on unmount', () => {
    const unsubscribeMock = vi.fn();
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: unsubscribeMock,
    }));

    const { unmount } = render(<Resume id="resume" />);
    unmount();

    expect(unsubscribeMock).toHaveBeenCalled();
  });
});
