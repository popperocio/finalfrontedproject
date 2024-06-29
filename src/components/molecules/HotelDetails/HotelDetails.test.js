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
  fromDate: '2024-04-18',
  toDate: '2024-04-20',
  travellers: 2,
  rooms: 1,
};

const mockSearchContext = {
  useEffect: jest.fn(),
  searchData: {searchData},
  setHotelPrice: jest.fn()
};

describe('HotelDetails component', () => {
  test('renders HotelDetails with context', () => {
    const contextValue = { searchData };

    const { getByText } = render(
      <SearchContext.Provider value={contextValue}>
        <HotelDetails hotel={hotel} />
      </SearchContext.Provider>
    );

    expect(getByText('Check in: 2024-04-18')).toBeInTheDocument();
    expect(getByText('Check out: 2024-04-20')).toBeInTheDocument();
    expect(getByText('Travellers: 2')).toBeInTheDocument();
    expect(getByText('Rooms: 1')).toBeInTheDocument();
    expect(getByText('Price: 200')).toBeInTheDocument();
  });

  
});