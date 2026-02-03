import React from 'react';
import { render, screen } from '@testing-library/react';
import ScreenHeading from './ScreenHeading';

describe('ScreenHeading Component', () => {
  test('renders title correctly', () => {
    render(<ScreenHeading title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders subheading when provided', () => {
    render(<ScreenHeading title="Test Title" subHeading="Test Subheading" />);
    const subHeadingElement = screen.getByText('Test Subheading');
    expect(subHeadingElement).toBeInTheDocument();
  });

  test('does not render subheading when not provided', () => {
    const { container } = render(<ScreenHeading title="Test Title" />);
    const subHeadingElements = container.querySelectorAll('.screen-sub-heading span');
    expect(subHeadingElements.length).toBe(0);
  });

  test('renders with correct CSS classes', () => {
    const { container } = render(<ScreenHeading title="Test Title" subHeading="Test Subheading" />);
    expect(container.querySelector('.heading-container')).toBeInTheDocument();
    expect(container.querySelector('.screen-heading')).toBeInTheDocument();
    expect(container.querySelector('.screen-sub-heading')).toBeInTheDocument();
  });
});
