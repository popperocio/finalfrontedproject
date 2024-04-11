import React from 'react';
import { render, fireEvent, getByTestId} from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';

const mockSearchContextValues = {
  searchData: {}, 
  updateSearchData: jest.fn(),
  searchedHotels: [],
  setSearchPerformed: jest.fn()
};

describe('SearchBar', () => {
  it('renders search bar', () => {
    const { getByTestId } = render(
      <SearchContext.Provider value={mockSearchContextValues}>
        <SearchBar />
      </SearchContext.Provider>
    );
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

  it('handleSearch updates correctly', () => {
    const { getByLabelText, getByText } = render(
      <SearchContext.Provider value={mockSearchContextValues}>
        <SearchBar />
      </SearchContext.Provider>
    );

    const destinationInput = getByLabelText('Destination');
    const fromDate = getByLabelText("From");
    const toDate = getByLabelText("To");
    const searchButton = getByText('Search');

    fireEvent.change(destinationInput, { target: { value: 'New York' } });
    fireEvent.change(fromDate, { target: { value: "Thu, 11 Apr 2025 03:00:00 GMT" } });
    fireEvent.change(toDate, { target: { value: "Thu, 30 Apr 2025 03:00:00 GMT" } });
    fireEvent.click(searchButton);

    expect(destinationInput.value).toBe('New York');
    expect(mockSearchContextValues.setSearchPerformed).toHaveBeenCalledWith(true);

  });
});