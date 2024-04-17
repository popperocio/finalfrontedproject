import React, { useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs';
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import './HotelDetails.css'
import { Calendar } from '../Calendar';
import ButtonGroups from '../../molecules/ButtonGroup';

export const HotelDetails = ({hotel}) => {

  const { searchData } = useContext(SearchContext);
  const [ fromDate, setFromDate ] = useState(null);
  const [ toDate, setToDate ] = useState(null);
  const [ price, setPrice ] = useState(0);
  const [ travellers, setTravellers ] = useState(1);
  const [ rooms, setRooms ] = useState(1);
  const currentDate = dayjs();

  useEffect(() => {
    if ((searchData.fromDate && searchData.toDate) || (fromDate && toDate)) {
      const fromDateString = (searchData.fromDate || fromDate);
      const toDateString = (searchData.toDate || toDate);
      const fromDateObj = new Date(fromDateString);
      const toDateObj = new Date(toDateString);
      const toDateDayjs = dayjs(toDateObj);
      const fromDateDayjs = dayjs(fromDateObj);
      const nights = toDateDayjs.diff(fromDateDayjs, 'day');
      if (fromDateDayjs <= toDateDayjs){
        const totalPrice = nights * hotel.price; 
        setPrice(totalPrice);
      }else{
        setPrice(0)
      }
    }
  }, [searchData.fromDate, searchData.toDate, fromDate, toDate]);
   
  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const renderDataToComplete = () => {
    if (searchData.fromDate && searchData.toDate) {
      return (
        <>
          <h3>Check in: {searchData.fromDate}</h3>
          <h3>Check out: {searchData.toDate}</h3>
          <h3>Travellers: { searchData.travellers}</h3>
          <h3>Rooms: {searchData.rooms}</h3>
        </>
      );
    } else {
      return (
        <div className='DetailsToComplete'>
          <Calendar label="From" 
            selectedDate={fromDate} 
            onDateChange={handleFromDateChange} 
            minDate={currentDate}
            className="CalendarData"
          />
          <Calendar 
            label="To" 
            selectedDate={toDate} 
            onDateChange={handleToDateChange} 
            minDate={fromDate}
            className="CalendarData"
          />
          <div className='TravellersData'>
            <h3>Travellers</h3>
            <ButtonGroups id="travellers-button-group" 
              onQuantityChange={handleTravellersQuantityChange}
          />
          </div>
          <div className='RoomsData'>
            <h3>Rooms</h3>
            <ButtonGroups id="rooms-button-group" 
              onQuantityChange={handleRoomsQuantityChange}
            />
          </div>
        </div>
      );
    }
  };

  const handleTravellersQuantityChange = (travellersQuantity) => {
    setTravellers(travellersQuantity);
  }

  const handleRoomsQuantityChange = (roomsQuantity) => {
    setRooms(roomsQuantity);  
  }
  return (
    <div className='HotelDetails'>
        <h2>Hotel Details</h2>
        <h3 className='HotelName'>{hotel.hotel_name}</h3>
        <img src={hotel.thumbnail} alt="hotel photo"/>
        <h3>{hotel.hotel_address}, {hotel.city}, {hotel.country}</h3>
        {renderDataToComplete()}
        <h3>Price: {price} </h3>
    </div>
  )
}
