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
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [isBooking, setIsBooking] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);

    const amenity_mapping = {
      "17": "WiFi",
      "27": "Restaurant",
      "51": "Baggage Storage",
      "113": "Front Desk",
      "138": "Laundry Service",
      "148": "Paid Private Parking",
      "154": "Pets Allowed"
    };
  
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
        const hotelParsedResults = parsedResults["getSharedBOF2.Downloads.Hotel.Hotels"]
        const hotelResults = hotelParsedResults.results.hotels
        const hotelsWithAmenities = Object.values(hotelResults).map(hotel => ({
          ...hotel,
          amenities: hotel.amenity_codes.split('^').map(code => amenity_mapping[code]).filter(Boolean)
        }));
        return hotelsWithAmenities
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

    const searchedHotels = Object.values(hotels).filter((hotel) => {
      const hotelCity = hotel.city.toLowerCase();
      const searchText = searchData.destination.toLowerCase();
      return hotelCity.includes(searchText);
    }).filter((hotel) => {
      if (selectedRating) {
        const roundedRating=Math.floor(hotel.star_rating)
        return roundedRating >= selectedRating;
      }
      return true;
    }).filter((hotel) => {
      if (selectedAmenities.length > 0) {
        console.log(hotel)
        return selectedAmenities.every(selectedAmenity => {
            return hotel.amenities.includes(selectedAmenity);
        });
    }
    return true;
    });

    return (
        <SearchContext.Provider
            value={{ 
              searchData, 
              updateSearchData,
              searchedHotels, 
              searchPerformed, 
              setSearchPerformed,
              hotels,
              selectedRating,
              setSelectedRating,
              selectedAmenities,
              setSelectedAmenities,
              isBooking,
              setIsBooking,
              selectedHotel, 
              setSelectedHotel
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