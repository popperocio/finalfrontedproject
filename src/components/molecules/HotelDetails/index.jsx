import React, { useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs';
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import './HotelDetails.css';
import { Calendar } from '../../atoms/Calendar';
import ButtonGroups from '../ButtonGroup';

export const HotelDetails = ({hotel}) => {

  const { searchData, updatePrice, updateNights } = useContext(SearchContext);
  const [ fromDate, setFromDate ] = useState(null);
  const [ toDate, setToDate ] = useState(null);
  const [ hotelPrice, setHotelPrice ] = useState(0);
  const [ travellers, setTravellers ] = useState(1);
  const [ rooms, setRooms ] = useState(1);
  const currentDate = dayjs();

  useEffect(() => {
    const fromDateString = fromDate || searchData.fromDate;
    const toDateString = toDate || searchData.toDate;

    if (fromDateString && toDateString) {
      const fromDateObj = new Date(fromDateString);
      const toDateObj = new Date(toDateString);
      const nights = dayjs(toDateObj).diff(dayjs(fromDateObj), 'day');

      if (nights >= 0) {
        updateNights(nights);
        const totalHotelPrice = nights * hotel.hotel_price;
        setHotelPrice(totalHotelPrice);
        updatePrice(totalHotelPrice);
      } else {
        setHotelPrice(0);
      }
    }
  }, [searchData.fromDate, searchData.toDate, fromDate, toDate, hotelPrice]);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const renderDataToComplete = () => {
    const fromDateString = fromDate || searchData.fromDate;
    const toDateString = toDate || searchData.toDate;

    let calculatedPrice = 0;
    if (fromDateString && toDateString) {
      const fromDateObj = new Date(fromDateString);
      const toDateObj = new Date(toDateString);
      const nights = dayjs(toDateObj).diff(dayjs(fromDateObj), 'day');

      if (nights >= 0) {
        calculatedPrice = nights * hotel.hotel_price;
      }
    }

    if (searchData.fromDate && searchData.toDate) {
      return (
        <>
          <h3>Check in: {searchData.fromDate}</h3>
          <h3>Check out: {searchData.toDate}</h3>
          <h3>Travellers: { searchData.travellers}</h3>
          <h3>Rooms: {searchData.rooms}</h3>
          <h3>Price: {hotelPrice}</h3>
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
          <div>
            <h3>Price: {calculatedPrice}</h3>
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
        <img src={hotel.hotel_image} alt="hotel photo"/>
        <h3>{hotel.hotel_address}, {hotel.hotel_city}, {hotel.hotel_country}</h3>
        {renderDataToComplete()}
    </div>
  )
}
