import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';


const mockSetSelectedHotel = jest.fn();
const mockSetIsBooking = jest.fn();

const mockSearchContext = {
  setSelectedHotel: mockSetSelectedHotel,
  setIsBooking: mockSetIsBooking,
};

test('renders card component with correct information', () => {
  const hotel = {
    hotelid_ppn: 1,
    hotel_name: 'Hotel 1',
    hotel_rating: 4,
    hotel_image: 'hotel1.jpg',
    hotel_address: '123 Main St',
    hotel_price: 100,
  };
  
  const { getByTestId } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Card hotel={hotel} />
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

test('renders card component with default props', () => {
  const { getByTestId } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Card hotel={{}} />
    </SearchContext.Provider>
  );
  
  const renderedImage = getByTestId('cardImage');
  const renderedName = getByTestId('hotelName');
  const renderedAddress = getByTestId('address');

  expect(renderedImage).toHaveAttribute('alt', 'hotel image');
  expect(renderedName).toHaveTextContent('');
  expect(renderedAddress).toHaveTextContent('');
});


test('calls setSelectedHotel and setIsBooking on BookButton click', () => {
  const hotel = {
    hotelid_ppn: 1,
    hotel_name: 'Hotel 1',
    hotel_rating: 4,
    hotel_image: 'hotel1.jpg',
    hotel_address: '123 Main St',
    hotel_price: 100,
  };

  const { getByRole } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Card hotel={hotel} />
    </SearchContext.Provider>
  );
  
  const bookButton = getByRole('button'); 
  fireEvent.click(bookButton);

  expect(mockSetSelectedHotel).toHaveBeenCalledWith(hotel);
  expect(mockSetIsBooking).toHaveBeenCalledWith(true);
});

test('renders default image when hotel image is missing', () => {
  const hotel = {
    hotelid_ppn: 1,
    hotel_name: 'Hotel 1',
    hotel_rating: 4,
    hotel_address: '123 Main St',
    hotel_price: 100,
  };

  const { getByTestId } = render(
    <SearchContext.Provider value={mockSearchContext}>
      <Card hotel={hotel} />
    </SearchContext.Provider>
  );

  const renderedImage = getByTestId('cardImage');
  expect(renderedImage.alt).toContain('hotel image'); 

});
