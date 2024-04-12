import React, { useContext } from 'react';
import './Results.css'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import { Card } from './Card';

function Results({}) {
    const { searchedHotels } = useContext(SearchContext);
    const { searchPerformed } = useContext(SearchContext);
    const { hotels } = useContext(SearchContext);

  return (
    <div className='Results'>
      <div className='CardResultsContainer'>
        {(searchedHotels.length > 0)? (
          <div> 
            {Object.values(hotels).map((hotel, index)=>(
              <Card 
                key={index}
                hotel_id={hotel.hotelid_ppn}
                hotel_name={hotel.hotel_name}
                stars={hotel.star_rating}
                image={hotel.thumbnail}
                price="99"
                adress={hotel.hotel_address}
              />
            ))}
          </div>
        ) : (searchPerformed && searchedHotels.length == 0)? (
          <> 
            <p>No results were found. Please, try another destination.</p>
          </>
           
        ) : null}    
      </div> 
    </div>
  );
}

export { Results };