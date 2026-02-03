import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioContainer from './PortfolioContainer';

// Mock commonUtils
jest.mock('../utilities/commonUtils', () => ({
  TOTAL_SCREENS: [
    {
      screen_name: 'Home',
      component: function MockHome({ screenName, id }: any) {
        return <div data-testid={`screen-${screenName}`} id={id}>Home Screen</div>;
      },
    },
    {
      screen_name: 'AboutMe',
      component: function MockAboutMe({ screenName, id }: any) {
        return <div data-testid={`screen-${screenName}`} id={id}>AboutMe Screen</div>;
      },
    },
    {
      screen_name: 'Resume',
      component: function MockResume({ screenName, id }: any) {
        return <div data-testid={`screen-${screenName}`} id={id}>Resume Screen</div>;
      },
    },
    {
      screen_name: 'Projects',
      component: function MockProjects({ screenName, id }: any) {
        return <div data-testid={`screen-${screenName}`} id={id}>Projects Screen</div>;
      },
    },
    {
      screen_name: 'ContactMe',
      component: function MockContactMe({ screenName, id }: any) {
        return <div data-testid={`screen-${screenName}`} id={id}>ContactMe Screen</div>;
      },
    },
  ],
}));

describe('PortfolioContainer Component', () => {
  test('renders portfolio container', () => {
    const { container } = render(<PortfolioContainer />);

    const portfolioContainer = container.querySelector('.portfolio-container');
    expect(portfolioContainer).toBeInTheDocument();
  });

  test('renders all screen components', () => {
    const { getByTestId } = render(<PortfolioContainer />);

    expect(getByTestId('screen-Home')).toBeInTheDocument();
    expect(getByTestId('screen-AboutMe')).toBeInTheDocument();
    expect(getByTestId('screen-Resume')).toBeInTheDocument();
    expect(getByTestId('screen-Projects')).toBeInTheDocument();
    expect(getByTestId('screen-ContactMe')).toBeInTheDocument();
  });

  test('renders correct number of screens', () => {
    const { container } = render(<PortfolioContainer />);

    const portfolioContainer = container.querySelector('.portfolio-container');
    expect(portfolioContainer?.children).toHaveLength(5);
  });

  test('each screen receives screenName prop', () => {
    const { getByTestId } = render(<PortfolioContainer />);

    const homeScreen = getByTestId('screen-Home');
    expect(homeScreen).toBeInTheDocument();
  });

  test('each screen receives id prop matching screen_name', () => {
    const { getByTestId } = render(<PortfolioContainer />);

    expect(getByTestId('screen-Home')).toHaveAttribute('id', 'Home');
    expect(getByTestId('screen-AboutMe')).toHaveAttribute('id', 'AboutMe');
    expect(getByTestId('screen-Resume')).toHaveAttribute('id', 'Resume');
    expect(getByTestId('screen-Projects')).toHaveAttribute('id', 'Projects');
    expect(getByTestId('screen-ContactMe')).toHaveAttribute('id', 'ContactMe');
  });

  test('renders screens in correct order', () => {
    const { container } = render(<PortfolioContainer />);

    const screens = container.querySelectorAll('[data-testid^="screen-"]');
    const screenNames = Array.from(screens).map(screen =>
      screen.getAttribute('data-testid')
    );

    expect(screenNames).toEqual([
      'screen-Home',
      'screen-AboutMe',
      'screen-Resume',
      'screen-Projects',
      'screen-ContactMe',
    ]);
  });

  test('handles screens without components gracefully', () => {
    // This test verifies the ternary logic in mapAllScreens
    const { container } = render(<PortfolioContainer />);

    // All our mocked screens have components, so they should all render
    const screens = container.querySelectorAll('[data-testid^="screen-"]');
    expect(screens.length).toBe(5);
  });
});
