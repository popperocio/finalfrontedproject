import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Checkboxes } from './index';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

describe('Checkboxes Component', () => {
  test('renders without crashing', () => {
    const mockContextValue = {
      hotels: [],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );
  });

  test('renders checkboxes with correct labels', () => {
    const mockContextValue = {
      hotels: [
        { amenities: ['Wifi', 'Restaurant'] },
        { amenities: ['Front Desk', 'Laundry Service'] },
      ],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    const { getByLabelText } = render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    expect(getByLabelText('Wifi')).toBeInTheDocument();
    expect(getByLabelText('Restaurant')).toBeInTheDocument();
    expect(getByLabelText('Front Desk')).toBeInTheDocument();
    expect(getByLabelText('Laundry Service')).toBeInTheDocument();
  });

  test('checkbox state changes when clicked', () => {
    const mockContextValue = {
      hotels: [{ amenities: ['Wifi'] }],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    const { getByLabelText } = render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    const checkbox = getByLabelText('Wifi');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('handleChange updates selectedAmenities correctly', () => {
    const mockContextValue = {
      hotels: [{ amenities: ['Wifi'] }],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    const { getByLabelText } = render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    const checkbox = getByLabelText('Wifi');
    fireEvent.click(checkbox);
    expect(mockContextValue.setSelectedAmenities).toHaveBeenCalledWith(['Wifi']);
  });

});