import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchButton } from './index';
import '@testing-library/jest-dom'


test('renders search button', () => {
  const { getByRole } = render(<SearchButton />);
  const searchButton = getByRole('button', { name: /search/i }); // Query by role and button text
  expect(searchButton).toBeInTheDocument();
});

test('renders search button with undefined onClick prop', () => {
  const { getByRole } = render(<SearchButton onClick={undefined} />);
  const searchButton = getByRole('button', { name: /search/i });
  expect(searchButton).toBeInTheDocument();
});

test('does not crash when the button is clicked with no onClick handler', () => {
  const { getByRole } = render(<SearchButton />);
  const searchButton = getByRole('button', { name: /search/i });
  expect(() => fireEvent.click(searchButton)).not.toThrow();
});
