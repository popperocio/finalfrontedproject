import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Filter } from './index';
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';


describe('Filter component', () => {
  test('renders Filter component', () => {
    const mockContextValue = {
        selectedRating: null,
        setSelectedRating: jest.fn(),
        hotels: [{
            "hotel_name": "Hotel Asterisk a family run hotel",
            "hotel_rating": "1",
            "amenities": ['WiFi'],
          }]
      };
    const { getByTestId } = render(
        <SearchContext.Provider value={mockContextValue}>
            <Filter />
        </SearchContext.Provider>
    );

    const ratings = getByTestId("ratingcontainer")
    const checkboxes = getByTestId("checkboxes")
    expect(ratings).toBeInTheDocument();
    expect(checkboxes).toBeInTheDocument();
  });
});