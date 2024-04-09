import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom'


test('renders navbar', () => {
  const { getByTestId } = render(<SearchBar/>);
  const searchbar = getByTestId('searchbar');
  const texfield = getByTestId('texfield'); 
  const travellers = getByTestId('travellers-icon');
  const rooms = getByTestId('rooms-icon');
  const searchButton = getByTestId ('search-btn');
  expect(searchbar).toBeInTheDocument();
  expect(texfield).toBeInTheDocument();
  expect(travellers).toBeInTheDocument();
  expect(rooms).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});