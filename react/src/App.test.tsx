import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './components/about-us';

test('renders learn react link', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});
