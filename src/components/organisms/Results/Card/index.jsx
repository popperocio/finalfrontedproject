import React, { useContext} from 'react';
import './Card.css'
import { RatingStars } from '../../../atoms/RatingStars';
import { BookButton } from '../../../atoms/BookButton';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

function Card ({ hotel_id, hotel  }) {

    const { setSelectedHotel, setIsBooking } = useContext(SearchContext);

    const handleBook = () => {
        setSelectedHotel(hotel);
        setIsBooking(true);
    };

    return (
        <div className='CardContainer' data-testid="card">
            <div className='HotelImageContainer'>
                <img src={hotel.hotel_image} alt="hotel image" data-testid="cardImage" />
            </div>
            <div className='HotelCardDetails'>
                <h2 data-testid="hotelName">{ hotel.hotel_name }</h2> 
                <RatingStars  className="Rating" stars={hotel.hotel_rating}/>
                <h3 data-testid="address"> {hotel.address }</h3> 
                <h3 className='Price'>${ hotel.price }</h3>
                <BookButton className="BookButton" handleBook={handleBook}/>
            </div>
        </div>
    )
}

export { Card }
