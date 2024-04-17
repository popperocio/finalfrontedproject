import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingReservation from './index';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

const mockSearchContext = {
  setIsBooking: jest.fn(),
  searchData: {
    destination: "NY",
    fromDate: "2025-10-05",
    toDate: "2025-11-05",
    travellers: 1,
    rooms:  1
  }
};

const hotel= {
  hotelid_ppn: 1,
  hotel_name: 'Hotel 1',
  star_rating: 4,
  thumbnail: 'hotel1.jpg',
  hotel_address: '123 Main St'
}

describe('BookingReservation Component', () => {
  test('renders BookingReservation component', () => {
    const { getByText } = render(
        <SearchContext.Provider value={mockSearchContext}>
          <BookingReservation hotel={hotel}/>
        </SearchContext.Provider>
    );

    expect(getByText('Reservation Form')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Surname')).toBeInTheDocument();
    expect(getByText('Passport Number')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Confirm your email')).toBeInTheDocument();
    expect(getByText('I accept the purchase conditions, privacy policies change and cancellation policies.')).toBeInTheDocument();
    expect(getByText('Finish booking')).toBeInTheDocument();
  });
  test('validates name form input', () => {
    const { getByText, getByLabelText, queryByText } = render(
      <SearchContext.Provider value={mockSearchContext}>
        <BookingReservation hotel={hotel}/>
      </SearchContext.Provider>
    );

    fireEvent.change(getByLabelText(/Name/), { target: { value: '' } });
    fireEvent.click(getByText('Finish booking'));
    expect(queryByText('Your name cannot be empty')).toBeInTheDocument();

    fireEvent.change(getByLabelText(/Name/), { target: { value: 'Rocio' } });
    fireEvent.click(getByText('Finish booking'));
    expect(queryByText('Your name cannot be empty')).not.toBeInTheDocument();
  });
});