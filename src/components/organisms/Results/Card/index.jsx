import React from 'react';
import './Card.css'
import { RatingStars } from '../../../atoms/RatingStars';
import { BookButton } from '../../../atoms/BookButton';


function Card ({ hotel_id, hotel_name, stars, image, price, address }) {

    return (
        <div className='CardContainer' data-testid="card">
            <div className='HotelImageContainer'>
                <img src={image} alt="hotel image" data-testid="cardImage" />
            </div>
            <div className='HotelCardDetails'>
                <h2 data-testid="hotelName">{ hotel_name }</h2> 
                <RatingStars  className="Rating" stars={stars}/>
                <h3 data-testid="address"> {address }</h3> 
                <h3 className='Price'>${ price }</h3>
                <BookButton className="BookButton"/>
            </div>
            
        </div>
    )
}



export { Card }