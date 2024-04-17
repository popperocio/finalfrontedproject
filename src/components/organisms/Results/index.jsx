import React, { useContext } from 'react';
import './Results.css'
import { SearchContext } from '../../../contexts/SearchContext/SearchContext';
import { Card } from './Card';
import { Filter } from '../../molecules/Filter';
import BookingReservation from './BookingReservation';


function Results({}) {
    const { searchedHotels } = useContext(SearchContext);
    const { searchPerformed } = useContext(SearchContext);
    const { isBooking, selectedHotel} = useContext(SearchContext);

    if (isBooking) {
        return <BookingReservation hotel={selectedHotel}/>; 
    }

  return (
    <div className='Results'>
        <div className='ResultsContainer'>
            <div className='Filters'>
                <Filter></Filter>
            </div>
            <div className='CardResultsContainer'>
              {(searchedHotels.length > 0)? (
                <div> 
                  {Object.values(searchedHotels).map((hotel, index)=>(
                    <Card 
                      key={index}
                      hotel={hotel}
                      price="99"
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
    </div>
  );
}

export { Results };