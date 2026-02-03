import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

// Mock dependencies
jest.mock('../../../utilities/commonUtils', () => ({
  TOTAL_SCREENS: [
    { screen_name: 'Home' },
    { screen_name: 'AboutMe' },
    { screen_name: 'Resume' },
    { screen_name: 'Projects' },
    { screen_name: 'ContactMe' },
  ],
  GET_SCREEN_INDEX: jest.fn((name) => {
    const screens = ['Home', 'AboutMe', 'Resume', 'Projects', 'ContactMe'];
    return screens.indexOf(name);
  }),
}));

jest.mock('../../../utilities/ScrollService', () => ({
  currentScreenBroadcaster: {
    subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
  },
}));

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Header Component', () => {
  beforeEach(() => {
    const ScrollService = require('../../../utilities/ScrollService');
    ScrollService.currentScreenBroadcaster.subscribe.mockImplementation(() => ({
      unsubscribe: jest.fn(),
    }));
  });

  test('renders header with logo', () => {
    render(<Header />);

    expect(screen.getByText('Mig-dev28')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
  });

  test('renders all navigation menu items', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('AboutMe')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('ContactMe')).toBeInTheDocument();
  });

  test('renders hamburger menu icon', () => {
    const { container } = render(<Header />);

    const hamburgerIcon = container.querySelector('.header-hamburger-bars');
    expect(hamburgerIcon).toBeInTheDocument();
  });

  test('hamburger menu toggles header options', () => {
    const { container } = render(<Header />);

    const headerOptions = container.querySelector('.header-options');
    expect(headerOptions).not.toHaveClass('show-hamburger-options');

    // Click hamburger menu
    const hamburger = container.querySelector('.header-hamburger');
    fireEvent.click(hamburger!);

    expect(headerOptions).toHaveClass('show-hamburger-options');

    // Click again to close
    fireEvent.click(hamburger!);
    expect(headerOptions).not.toHaveClass('show-hamburger-options');
  });

  test('clicking menu item scrolls to section', () => {
    // Mock getElementById
    const mockElement = document.createElement('div');
    mockElement.id = 'Home';
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<Header />);

    const homeMenuItem = screen.getByText('Home');
    fireEvent.click(homeMenuItem);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('clicking menu item closes hamburger menu', () => {
    const { container } = render(<Header />);

    // Open hamburger menu
    const hamburger = container.querySelector('.header-hamburger');
    fireEvent.click(hamburger!);

    const headerOptions = container.querySelector('.header-options');
    expect(headerOptions).toHaveClass('show-hamburger-options');

    // Click a menu item
    const homeMenuItem = screen.getByText('Home');
    fireEvent.click(homeMenuItem);

    // Menu should close
    expect(headerOptions).not.toHaveClass('show-hamburger-options');
  });

  test('applies selected class to active menu item', () => {
    const { container } = render(<Header />);

    const homeMenuItem = screen.getByText('Home').closest('.header-option');
    fireEvent.click(screen.getByText('Home'));

    expect(homeMenuItem).toHaveClass('selected-header-option');
  });

  test('menu items have separator class except last one', () => {
    const { container } = render(<Header />);

    const menuItems = container.querySelectorAll('.header-option');
    const menuItemsArray = Array.from(menuItems);

    // All except last should have separator
    menuItemsArray.slice(0, -1).forEach((item) => {
      expect(item).toHaveClass('header-option-seperator');
    });

    // Last item should not have separator
    const lastItem = menuItemsArray[menuItemsArray.length - 1];
    expect(lastItem).not.toHaveClass('header-option-seperator');
  });

  test('header container is clickable', () => {
    const { container } = render(<Header />);

    const headerContainer = container.querySelector('.header-container');
    expect(headerContainer).toBeInTheDocument();

    // Initially menu is closed
    const headerOptions = container.querySelector('.header-options');
    expect(headerOptions).not.toHaveClass('show-hamburger-options');

    // Click header container
    fireEvent.click(headerContainer!);

    // Menu should open
    expect(headerOptions).toHaveClass('show-hamburger-options');
  });

  test('component cleans up subscription on unmount', () => {
    const unsubscribeMock = jest.fn();
    const ScrollService = require('../../../utilities/ScrollService');
    ScrollService.currentScreenBroadcaster.subscribe.mockImplementation(() => ({
      unsubscribe: unsubscribeMock,
    }));

    const { unmount } = render(<Header />);
    unmount();

    expect(unsubscribeMock).toHaveBeenCalled();
  });

  test('does not scroll if element not found', () => {
    jest.spyOn(document, 'getElementById').mockReturnValue(null);

    render(<Header />);

    const homeMenuItem = screen.getByText('Home');

    // Should not throw error
    expect(() => fireEvent.click(homeMenuItem)).not.toThrow();
  });
});
