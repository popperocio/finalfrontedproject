import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom'
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

const mockSearchContext = {
  setSelectedHotel: jest.fn(),
  setIsBooking: jest.fn(),
};

test('renders card component with correct information', () => {
  const hotel= {
    hotelid_ppn: 1,
    hotel_name: 'Hotel 1',
    hotel_rating: 4,
    hotel_image: 'hotel1.jpg',
    hotel_address: '123 Main St'
  }
  const { getByTestId } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Card hotel={hotel}/>
    </SearchContext.Provider>
  );
  const renderedImage = getByTestId('cardImage');
  const renderedName = getByTestId('hotelName');
  const renderedAddress = getByTestId('address');

  expect(renderedImage).toBeInTheDocument();
  expect(renderedImage.alt).toBe('hotel image');
  expect(renderedName).toBeInTheDocument();
  expect(renderedAddress).toBeInTheDocument();
});