import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import { HotelDetails } from './index';

const hotel = {
  hotel_name: 'Sample Hotel',
  hotel_image: 'sample.jpg',
  hotel_address: '123 Sample St',
  city: 'Sample City',
  country: 'Sample Country',
  hotel_price:100
};
const searchData = {
  destination: 'amsterdam',
  fromDate: '2024-04-18',
  toDate:  '2024-04-20',
  travellers: 1,
  rooms: 1,
  price: 200,
  nights: 1,
};

const mockSearchContext = {
  useEffect: jest.fn(),
  searchData: searchData,
  setHotelPrice: jest.fn(),
  updateSearchData: jest.fn(),
};

describe('HotelDetails component', () => {
  test('renders HotelDetails with context', () => {
    const contextValue = mockSearchContext;

    const { getByText } = render(
      <SearchContext.Provider value={contextValue}>
        <HotelDetails hotel={hotel} />
      </SearchContext.Provider>
    );

    expect(getByText('Check in: Thu, 18 Apr 2024')).toBeInTheDocument();
    expect(getByText('Check out: Sat, 20 Apr 2024')).toBeInTheDocument();
    expect(getByText('Travellers: 1')).toBeInTheDocument();
    expect(getByText('Rooms: 1')).toBeInTheDocument();
    expect(getByText('Price: 200')).toBeInTheDocument();
  });

  
});