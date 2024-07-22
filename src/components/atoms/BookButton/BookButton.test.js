import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BookButton } from './index';
import '@testing-library/jest-dom'

describe('BookButton component', () => {
    it('renders the button', () => {
      const { getByText } = render(<BookButton />);
      
      const bookButton = getByText('Book now');
  
      expect(bookButton).toBeInTheDocument();
    });
    
    it('handles click event when handleBook is provided', () => {
      const handleBookMock = jest.fn();
      const { getByText } = render(<BookButton handleBook={handleBookMock} />);
      const bookButton = getByText('Book now');
      fireEvent.click(bookButton);
      expect(handleBookMock).toHaveBeenCalledTimes(1);
    });
  
    it('does not crash when handleBook is not provided', () => {
      const { getByText } = render(<BookButton />);
      const bookButton = getByText('Book now');
      expect(() => fireEvent.click(bookButton)).not.toThrow();
    });
  });