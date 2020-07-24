import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '.';

test('renders `Round Robin Sim`', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Round Robin Sim/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders `TypeScript, React, Hooks and Bulma`', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/TypeScript, React, Hooks and Bulma/i);
  expect(linkElement).toBeInTheDocument();
});
