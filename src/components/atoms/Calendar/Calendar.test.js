import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Calendar } from './index';
import '@testing-library/jest-dom'
import dayjs from 'dayjs';

test('renders calendar', () => {
    const { getByPlaceholderText } = render(<Calendar/>);
    const inputField = getByPlaceholderText('MM/DD/YYYY');
    expect(inputField).toBeInTheDocument();
});

test('renders calendar and handles date change', () => {
    const handleDateChange = jest.fn();
    const { getByPlaceholderText } = render(<Calendar onDateChange={handleDateChange} />);
    const inputField = getByPlaceholderText('MM/DD/YYYY');

    fireEvent.change(inputField, { target: { value: '07/26/2024' } });


    expect(handleDateChange).toHaveBeenCalled();
  });

test('renders calendar with minDate', () => {
    const minDate = dayjs('2024-01-01'); 
    const { getByPlaceholderText } = render(<Calendar minDate={minDate} />);
    const inputField = getByPlaceholderText('MM/DD/YYYY');
    
    expect(inputField).toBeInTheDocument();
  });

  test('renders calendar without error styling when incompleteError is false', () => {
    const { container } = render(
      <Calendar 
        label="Test Calendar"
        selectedDate={dayjs()}
        onDateChange={() => {}}
        minDate={dayjs()}
        incompleteError={false}
      />
    );
  
    const datePicker = container.querySelector('.MuiInputBase-root');

    expect(datePicker).not.toHaveStyle('color: red'); 

  });
