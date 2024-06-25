import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Results } from './index';
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';

const mockSearchContext = {
  searchedHotels: [],
  searchPerformed: true,
  hotels: []
};

test('renders no results message when no hotels are found', () => {
  const { getByText } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Results />
    </SearchContext.Provider>
  );
  const noResultsMessage = getByText(/No results were found/i);
  expect(noResultsMessage).toBeInTheDocument();
});

test('renders hotels when hotels are found', () => {
  const mockHotels = [
    {
      hotelid_ppn: 1,
      hotel_name: 'Hotel 1',
      hotel_rating: 4,
      hotel_image: 'hotel1.jpg',
      hotel_address: '123 Main St'
    },
    {
      hotelid_ppn: 2,
      hotel_name: 'Hotel 2',
      hotel_rating: 3,
      hotel_image: 'hotel2.jpg',
      hotel_address: '456 Elm St'
    }
  ];

  const { getByText, getAllByTestId } = render(
    <SearchContext.Provider value={{ ...mockSearchContext, searchedHotels: mockHotels }}>
      <Results />
    </SearchContext.Provider>
  );

  const hotelNames = mockHotels.map(hotel => getByText(hotel.hotel_name));
  expect(hotelNames.length).toBe(mockHotels.length);

  const hotelCards = getAllByTestId('card');
  expect(hotelCards.length).toBe(mockHotels.length);
});