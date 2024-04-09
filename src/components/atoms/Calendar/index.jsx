import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Calendar = ({label, selectedDate, onDateChange, minDate}) => {

  const [error, setError] = React.useState(null);

  const handleDateChange = (date) => {
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
        <DatePicker
          label={label}
          minDate={minDate} 
          value={selectedDate}
          onChange={handleDateChange}
          sx={{background:"white", color: error ? 'red' : 'inherit', border: error ? '2px solid red' : 'inherit'}}
          onError={(newError) => setError(newError)}
          data-testid="calendar"
        />
    </LocalizationProvider>
  );

}
