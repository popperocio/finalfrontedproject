import React, { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function Results({}) {
    const { searchedHotels } = useContext(SearchContext);
    const { searchPerformed } = useContext(SearchContext);
   
  return (
    <div className='ResultsContainer'>   
        {(searchedHotels > 0)? (
          <div></div>
        ) : (searchPerformed && searchedHotels < 1)? (
          <p>No results found</p>
        ) : null}
   
    </div>
  );
}

export { Results };