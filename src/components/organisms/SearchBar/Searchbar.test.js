import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

let mockSearchContextValues;

beforeEach(() => {
  mockSearchContextValues = {
    fromDate: '',
    setFromDate: jest.fn(),
    toDate: '',
    setToDate: jest.fn(),
    destination: '',
    setDestination: jest.fn(),
    travellers: '',
    setTravellers: jest.fn(),
    rooms: '',
    setRooms: jest.fn(),
    searchData: {
      destination: '',
      fromDate: '',
      toDate: '',
      travellers: 0,
      rooms: 0,
    },
    updateSearchData: jest.fn((data) => {
      mockSearchContextValues.searchData = {...data };
    }),
    setSearchPerformed: jest.fn(),
    searchedHotels: [],
    searchPerformed: false,
    isBooking: false,
  };
});
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

  it('handleSearch updates correctly', async() => {
    const { getByLabelText, getByText } = render(
      <SearchContext.Provider value={mockSearchContextValues}>
        <SearchBar />
      </SearchContext.Provider>
    );

    const destinationInput = getByLabelText('Destination');
    const fromDate = getByLabelText("From");
    const toDate = getByLabelText("To");
    const searchButton = getByText('Search');

    await userEvent.type(destinationInput, 'New York');
    await userEvent.type(fromDate, '04/30/2025');
    await userEvent.type(toDate, '05/01/2025');
    await userEvent.click(searchButton);

    expect(destinationInput.value).toBe('New York');
    expect(mockSearchContextValues.setSearchPerformed).toHaveBeenCalledWith(true);

    await waitFor(() => {
      expect(mockSearchContextValues.updateSearchData).toHaveBeenCalledWith({
        destination: destinationInput.value,
        fromDate: "Wed, 30 Apr 2025 03:00:00 GMT",
        toDate: "Thu, 01 May 2025 03:00:00 GMT",
        travellers: 1,
        rooms: 1
      });
    });

   });
  

  it('handles date changes correctly', async() => {
    const { getByLabelText, getByText } = render(
      <SearchContext.Provider value={mockSearchContextValues}>
        <SearchBar />
      </SearchContext.Provider>
    );
    const destinationInput = getByLabelText('Destination');
    const fromDateInput = getByLabelText('From');
    const toDateInput = getByLabelText('To');
    const searchButton = getByText('Search');
    

    await userEvent.type(destinationInput, 'New York');
    await userEvent.type(fromDateInput, '04/30/2025');
    await userEvent.type(toDateInput, '05/01/2025');
    await userEvent.click(searchButton);

    const originalFromDate = dayjs('04/30/2025', 'MM/DD/YYYY');
    const originalToDate = dayjs('05/01/2025', 'MM/DD/YYYY');
    const newFromDate = originalFromDate.add(1, 'day').format('MM/DD/YYYY');
    const newToDate = originalToDate.add(2, 'day').format('MM/DD/YYYY');
 

    await userEvent.type(fromDateInput, newFromDate);
    await userEvent.type(toDateInput, newToDate);
    await userEvent.click(searchButton);
  
    expect(mockSearchContextValues.updateSearchData).toHaveBeenCalled();
    expect(mockSearchContextValues.searchData.fromDate).toBe("Thu, 01 May 2025 03:00:00 GMT");
    expect(mockSearchContextValues.searchData.toDate).toBe("Sat, 03 May 2025 03:00:00 GMT");
  });
 it('sets searchPerformed to true when search is performed', async () => {
    const { getByLabelText, getByText } = render(
      <SearchContext.Provider value={mockSearchContextValues}>
        <SearchBar />
      </SearchContext.Provider>
    );

    const destinationInput = getByLabelText('Destination');
    const fromDateInput = getByLabelText('From');
    const toDateInput = getByLabelText('To');
    const searchButton = getByText('Search');

    await userEvent.type(destinationInput, 'New York');
    await userEvent.type(fromDateInput, '04/30/2025');
    await userEvent.type(toDateInput, '05/01/2025');
    await userEvent.click(searchButton);

    expect(mockSearchContextValues.setSearchPerformed).toHaveBeenCalledWith(true);
  });
});