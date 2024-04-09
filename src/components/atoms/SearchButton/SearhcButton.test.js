import React from 'react';
import { render } from '@testing-library/react';
import { SearchButton } from './index';
import '@testing-library/jest-dom'


test('renders search button', () => {
  const { getByTestId } = render(<SearchButton/>);
  const searchbtn = getByTestId('search-btn');
  expect(searchbtn).toBeInTheDocument();
});