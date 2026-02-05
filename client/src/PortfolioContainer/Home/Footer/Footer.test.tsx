import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import ScrollService from '../../../utilities/ScrollService';

// Mock ScrollService
vi.mock('../../../utilities/ScrollService', () => ({
  default: {
    scrollHandler: {
      scrollToHome: vi.fn(),
    },
  },
}));

describe('Footer Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders footer component', () => {
    const { container } = render(<Footer />);

    const footerContainer = container.querySelector('.footer-container');
    expect(footerContainer).toBeInTheDocument();
  });

  test('renders footer background image', () => {
    const { container } = render(<Footer />);

    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'no internet connection');
  });

  test('renders scroll to top button', () => {
    const { container } = render(<Footer />);

    const scrollButton = container.querySelector('.btn-scroll');
    expect(scrollButton).toBeInTheDocument();
  });

  test('scroll button has arrow up icon', () => {
    const { container } = render(<Footer />);

    const arrowIcon = container.querySelector('.fa-arrow-up');
    expect(arrowIcon).toBeInTheDocument();
  });

  test('clicking scroll button calls scrollToHome', () => {
    const { container } = render(<Footer />);

    const scrollButton = container.querySelector('.btn-scroll');
    fireEvent.click(scrollButton!);

    expect(ScrollService.scrollHandler.scrollToHome).toHaveBeenCalled();
  });

  test('applies correct CSS classes', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('.footer-container')).toBeInTheDocument();
    expect(container.querySelector('.footer-parent')).toBeInTheDocument();
    expect(container.querySelector('.scroll-container')).toBeInTheDocument();
  });

  test('scroll button has correct button element', () => {
    const { container } = render(<Footer />);

    const scrollButton = container.querySelector('.btn-scroll');
    expect(scrollButton?.tagName).toBe('BUTTON');
  });
});
