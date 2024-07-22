import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchButton } from './index';
import '@testing-library/jest-dom'


test('renders search button', () => {
  const { getByTestId } = render(<SearchButton/>);
  const searchbtn = getByTestId('search-btn');
  expect(searchbtn).toBeInTheDocument();
});

test('renders search button with undefined onClick prop', () => {
  const { getByTestId } = render(<SearchButton onClick={undefined} />);
  const searchbtn = getByTestId('search-btn');
  expect(searchbtn).toBeInTheDocument();
});

test('does not crash when the button is clicked with no onClick handler', () => {
  const { getByTestId } = render(<SearchButton />);
  const searchbtn = getByTestId('search-btn');
  expect(() => fireEvent.click(searchbtn)).not.toThrow();
});

