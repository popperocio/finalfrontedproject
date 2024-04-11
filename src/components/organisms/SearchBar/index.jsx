import React, { useState, useContext} from 'react';
import dayjs from 'dayjs';
import './SearchBar.css';
import { Textfield } from '../../atoms/Textfield';
import { Calendar } from '../../atoms/Calendar';
import { DividedInput } from '../../molecules/DividedInput';
import { SearchButton } from '../../atoms/SearchButton';
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';

function SearchBar() {
  const [ fromDate, setFromDate ] = useState(null);
  const [ toDate, setToDate ] = useState(null);
  const [ destination, setDestination ] = useState('');
  const [ travellers, setTravellers ] = useState(1);
  const [ rooms, setRooms ] = useState(1);
  const { searchData, updateSearchData } = useContext(SearchContext);
  const { searchedHotels } = useContext(SearchContext);
  const { setSearchPerformed } = useContext(SearchContext);
  const currentDate = dayjs();

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  
  const handleSearch = () => {
    updateSearchData({ 
      destination: destination,
      fromDate: fromDate?.toString(),
      toDate: toDate?.toString(),
      travellers: travellers,
      rooms:  rooms
    });
    setSearchPerformed(true);
  };

  const handleDestinationChange = (destination) => {
    setDestination(destination);
  }

  const handleTravellersQuantityChange = (travellersQuantity) => {
    setTravellers(travellersQuantity);
  }

  const handleRoomsQuantityChange = (roomsQuantity) => {
    setRooms(roomsQuantity);  
  }

  return (
    <>
      <div className='SearchBarContainer' data-testid="searchbar">
        <Textfield label="Destination" onChange={handleDestinationChange}/>
        <Calendar label="From" 
          selectedDate={fromDate} 
          onDateChange={handleFromDateChange} 
          minDate={currentDate}
        />
        <Calendar 
          label="To" 
          selectedDate={toDate} 
          onDateChange={handleToDateChange} 
          minDate={fromDate}
        />
        <DividedInput 
          onTravellersQuantityChange={handleTravellersQuantityChange} 
          onRoomsQuantityChange={handleRoomsQuantityChange}
        />
        <SearchButton onClick={handleSearch} />
      </div>
    </>
  );
}

export { SearchBar };