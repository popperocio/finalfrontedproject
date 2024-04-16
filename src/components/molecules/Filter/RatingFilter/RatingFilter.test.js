import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RatingFilter } from './index';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

describe('RatingFilter Component', () => {
    test('renders ratings correctly', () => {
      const mockContextValue = {
        selectedRating: null,
        setSelectedRating: jest.fn(),
      };
  
      const { getByText, getByTestId} = render(
        <SearchContext.Provider value={mockContextValue}>
          <RatingFilter />
        </SearchContext.Provider>
      );
      const ratingContainer = getByTestId("ratingcontainer")
      const rating1 = getByTestId("rating-1")
      const rating2 = getByTestId("rating-2")
      const rating3 = getByTestId("rating-3")
      const rating4 = getByTestId("rating-4")
      const rating5 = getByTestId("rating-5")
      expect(getByText('Rates:')).toBeInTheDocument();
      expect(ratingContainer).toBeInTheDocument();
      expect(rating1).toBeInTheDocument();
      expect(rating2).toBeInTheDocument();
      expect(rating3).toBeInTheDocument();
      expect(rating4).toBeInTheDocument();
      expect(rating5).toBeInTheDocument();
    });
  
    test('clicking a rating sets selectedRating in context', () => {
      const mockContextValue = {
        selectedRating: null,
        setSelectedRating: jest.fn(),
      };
  
      const { getByTestId } = render(
        <SearchContext.Provider value={mockContextValue}>
          <RatingFilter />
        </SearchContext.Provider>
      );

      fireEvent.click(getByTestId('rating-3'));
  
      expect(mockContextValue.setSelectedRating).toHaveBeenCalledWith(3);
    });
  
    test('clicking a selected rating deselects it', () => {
      const mockContextValue = {
        selectedRating: 4,
        setSelectedRating: jest.fn(),
      };
  
      const { getByTestId } = render(
        <SearchContext.Provider value={mockContextValue}>
          <RatingFilter />
        </SearchContext.Provider>
      );
  
      fireEvent.click(getByTestId('rating-4'));
  
      expect(mockContextValue.setSelectedRating).toHaveBeenCalledWith(null);
    });
  });