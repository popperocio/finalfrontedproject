import React, { useState} from 'react';
import dayjs from 'dayjs';
import './SearchBar.css';
import { Textfield } from '../../atoms/Textfield';
import { Calendar } from '../../atoms/Calendar';
import { DividedInput } from '../../molecules/DividedInput';
import { SearchButton } from '../../atoms/SearchButton';


function SearchBar() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const currentDate = dayjs();

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  
  return (
    <div className='SearchBarContainer' data-testid="searchbar">
      <Textfield label="Destination"/>
      <Calendar label="From" selectedDate={fromDate} onDateChange={handleFromDateChange} minDate={currentDate}/>
      <Calendar label="To" selectedDate={toDate} onDateChange={handleToDateChange} minDate={fromDate}/>
      <DividedInput/>
      <SearchButton/>
    </div>
  );
}

export { SearchBar };