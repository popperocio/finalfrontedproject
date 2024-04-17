import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import './HotelDetails.css'

export const HotelDetails = ({hotel}) => {

  const { searchData } = useContext(SearchContext);
  
  return (
    <div className='HotelDetails'>
        <h2>Hotel Details</h2>
        <h3 className='HotelName'>{hotel.hotel_name}</h3>
        <img src={hotel.thumbnail} alt="hotel photo"/>
        <h3>{hotel.hotel_address}, {hotel.city}, {hotel.country}</h3>
        <h3>Check in: {searchData.fromDate} </h3>
        <h3>Check out: {searchData.toDate} </h3>
        <h3>Travellers: { searchData.travellers}</h3>
        <h3>Rooms: {searchData.rooms}</h3>
        <h3>Price: </h3>
    </div>
  )
}
