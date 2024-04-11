import { useState, createContext } from "react";
import PropTypes from "prop-types"; 

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [searchData, setSearchData] = useState({
        destination: '',
        fromDate: '',
        toDate: '',
        travellers: 1,
        rooms: 1
    });
    const [hotels, setHotels] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const updateSearchData = (data) => {
        setSearchData({ ...searchData, ...data });
    };

    const searchedHotels = hotels.filter((hotel) => {
      const hotelDestination = hotel.destination.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return hotelDestination.includes(searchText);
    });
    
    return (
        <SearchContext.Provider
            value={{ 
              searchData, 
              updateSearchData,
              searchedHotels, 
              searchPerformed, 
              setSearchPerformed 
            }}
        >
          {children}
        </SearchContext.Provider>
      );
    }
    
    SearchProvider.propTypes = {
      children: PropTypes.node.isRequired,
    };
    
export { SearchContext, SearchProvider };