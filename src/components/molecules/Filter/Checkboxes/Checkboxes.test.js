import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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

  test('renders checkboxes with correct labels from amenities', () => {
    const mockContextValue = {
      hotels: [
        { amenities: ['Wifi', 'Restaurant'] },
        { amenities: ['Front Desk', 'Laundry Service'] },
      ],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    expect(screen.getByLabelText('Wifi')).toBeInTheDocument();
    expect(screen.getByLabelText('Restaurant')).toBeInTheDocument();
    expect(screen.getByLabelText('Front Desk')).toBeInTheDocument();
    expect(screen.getByLabelText('Laundry Service')).toBeInTheDocument();
  });

  test('renders no checkboxes when hotels have no amenities', () => {
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

    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes).toHaveLength(0);
  });

  test('checkbox state changes when clicked', () => {
    const mockContextValue = {
      hotels: [{ amenities: ['Wifi'] }],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    const checkbox = screen.getByLabelText('Wifi');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  
  test('handleChange updates state correctly', () => {
    const mockContextValue = {
      hotels: [{ amenities: ['Wifi'] }],
      selectedAmenities: [],
      setSelectedAmenities: jest.fn(),
    };

    render(
      <SearchContext.Provider value={mockContextValue}>
        <Checkboxes />
      </SearchContext.Provider>
    );

    const checkbox = screen.getByLabelText('Wifi');
    fireEvent.click(checkbox);

    expect(screen.getByLabelText('Wifi')).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Wifi' })).toBeChecked();
  });
});
