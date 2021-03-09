import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
 * Workaround for typescript Jest and react-testing-library.
 * https://stackoverflow.com/a/64872224
 */
global.matchMedia = global.matchMedia || function matchMedia() {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/people/i);
  expect(linkElement).toBeInTheDocument();
});
