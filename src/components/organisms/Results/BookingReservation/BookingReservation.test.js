import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingReservation from './index';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

const mockSearchContext = {
  setIsBooking: jest.fn(),
  updateFormData: jest.fn(),
  searchData: {
    destination: "NY",
    fromDate: "2025-10-05",
    toDate: "2025-11-05",
    travellers: 1,
    rooms:  1
  },
  formData:{
    guestName: 'John Doe',
    passportNumber: '123456',
    email: 'john.doe@gmail.com',
    confirmEmail: 'john.doe@gmail.com',
    checked: true,
  },
  updateSearchData: jest.fn(),
  selectedHotel:{
    hotel_id: 1,
    hotel_name: 'Hotel 1',
    hotel_rating: 4,
    hotel_image: 'hotel1.jpg',
    hotel_address: '123 Main St'
  }

};

const hotel= {
  hotel_id: 1,
  hotel_name: 'Hotel 1',
  hotel_rating: 4,
  hotel_image: 'hotel1.jpg',
  hotel_address: '123 Main St'
}

describe('BookingReservation Component', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
  });

  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  test('renders BookingReservation component', () => {
    const { getByText } = render(
      <SearchContext.Provider value={mockSearchContext}>
        <BookingReservation hotel={hotel} />
      </SearchContext.Provider>
    );

    expect(getByText('Reservation Form')).toBeInTheDocument();
    expect(getByText('Guest Name')).toBeInTheDocument();
    expect(getByText('Passport Number')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Confirm your email')).toBeInTheDocument();
    expect(getByText('I accept the purchase conditions, privacy policies change and cancellation policies.')).toBeInTheDocument();
    expect(getByText('Finish booking')).toBeInTheDocument();
  });

  test('validates name form input', async () => {
    const { getByText, getByLabelText, queryByText } = render(
      <SearchContext.Provider value={mockSearchContext}>
        <BookingReservation hotel={hotel} />
      </SearchContext.Provider>
    );

    fireEvent.change(getByLabelText(/Guest Name/i), { target: { value: 'John Doe' } });
    fireEvent.click(getByText('Finish booking'));

    await waitFor(() => {
      expect(queryByText('Your name and surname cannot be empty')).not.toBeInTheDocument();
    });
  });

  test('shows error for empty fields', async () => {
    const context = { ...mockSearchContext, formData: { guestName: '', passportNumber: '', email: '', confirmEmail: '', checked: false } };
    const { getByText } = render(
        <SearchContext.Provider value={context}>
            <BookingReservation hotel={hotel} />
        </SearchContext.Provider>
    );

    fireEvent.click(getByText('Finish booking'));

    await waitFor(() => {
        expect(getByText('Your name and surname cannot be empty')).toBeInTheDocument();
        expect(getByText('Your passport number cannot be empty')).toBeInTheDocument();
        expect(getByText('Invalid email')).toBeInTheDocument();
        expect(getByText('Your email should be the same as the one entered above')).toBeInTheDocument();
        expect(getByText('You must accept the terms and conditions')).toBeInTheDocument();
    });
});

test('shows modal on successful submission', async () => {
    const { getByText } = render(
        <SearchContext.Provider value={mockSearchContext}>
            <BookingReservation hotel={hotel} />
        </SearchContext.Provider>
    );
    fireEvent.click(getByText('Finish booking'));

    await waitFor(() => {
        expect(document.querySelector('.Modal')).toBeInTheDocument();
    });
});

test('handles go back button click', () => {
  const { container } = render(
    <SearchContext.Provider value={mockSearchContext}>
        <BookingReservation hotel={hotel} />
    </SearchContext.Provider>
  );

  const backButton = container.querySelector('.GoBack');

  fireEvent.click(backButton);

  expect(mockSearchContext.setIsBooking).toHaveBeenCalledWith(false);
});

test('shows error message when checkbox is not checked and form is submitted', async () => {
  const context = { ...mockSearchContext, formData: { guestName: '', passportNumber: '', email: '', confirmEmail: '', checked: false } };
  const {getByRole, getByText}=render(
      <SearchContext.Provider value={context}>
          <BookingReservation hotel={hotel} />
      </SearchContext.Provider>
  );

  const checkbox = getByRole('checkbox', { name: /I accept the purchase conditions/i });
  expect(checkbox).not.toBeChecked();


  fireEvent.click(getByText('Finish booking'));

  await waitFor(() => {
      expect(getByText('You must accept the terms and conditions')).toBeInTheDocument();
  });
});

});