import { useState, createContext, useEffect } from "react";
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
    const [isLoading, setIsLoading] = useState(true);
    const searchedHotels = useState([]);

    const getData = async () => {
      const url = 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/downloadHotels?limit=50&language=en-US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '...',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const results = await response.text()
        const parsedResults = JSON.parse(results)
        const hotelResults = parsedResults["getSharedBOF2.Downloads.Hotel.Hotels"]
        const hotels = hotelResults.results.hotels
        return hotels
      } catch (error) {
        console.error(error);
      }
    };

 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const hotelList = await getData();
          setHotels(hotelList);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    const updateSearchData = (data) => {
        setSearchData({ ...searchData, ...data });
    };
    
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