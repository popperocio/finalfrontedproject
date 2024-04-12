import React from 'react';
import { render } from '@testing-library/react';
import { BookButton } from './index';
import '@testing-library/jest-dom'

describe('BookButton component', () => {
    it('renders the button', () => {
      const { getByText } = render(<BookButton />);
      
      const bookButton = getByText('Book now');
  
      expect(bookButton).toBeInTheDocument();
    });
  });