import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom'


test('renders navbar', () => {
  const { getByTestId } = render(<SearchBar/>);
  const searchbar = getByTestId('searchbar');
  const texfield = getByTestId('texfield'); 
  expect(searchbar).toBeInTheDocument();
  expect(texfield).toBeInTheDocument();
});