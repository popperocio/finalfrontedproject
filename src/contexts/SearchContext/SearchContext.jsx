import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types"; 

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [searchData, setSearchData] = useState({
        destination: '',
        fromDate: '',
        toDate: '',
        travellers: 0,
        rooms: 0,
        price: 0,
        nights: 0,
    });
    const [hotels, setHotels] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [isBooking, setIsBooking] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [formData, setFormData] = useState({
      guestName: '',
      passportNumber: '',
      email: '',
      confirmEmail: '',
      checked: false,
    });

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
      try {
        const response = await fetch("http://127.0.0.1:8000/hotels");
        const hotelList = await response.json();
        const flattenedHotels = hotelList.reduce((acc, val) => acc.concat(val), []);
        const hotelsWithExtraInformation = flattenedHotels.map(hotel => ({
          ...hotel,
          amenities: hotel.amenities.split('^').map(code => amenity_mapping[code]).filter(Boolean),
        }));
        return hotelsWithExtraInformation
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

    const updatePrice = (price) => {
      setSearchData((prevData) => ({
        ...prevData,
        price: price
      }));
    };

    const updateNights = (nights) => {
      setSearchData((prevData) => ({
        ...prevData,
        nights: nights
      }));
    };

    const updateFormData = (data) => {
      setFormData(prev => ({ ...prev, ...data }));
    };

    const searchedHotels = hotels.filter((hotel) => {
      const hotelCity = hotel.hotel_city.toLowerCase();
      const searchText = searchData.destination.toLowerCase();
      return hotelCity.includes(searchText);
    }).filter((hotel) => {
      if (selectedRating) {
        const roundedRating=Math.floor(hotel.hotel_rating)
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
              setSelectedHotel,
              updatePrice,
              updateNights,
              formData,
              updateFormData
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