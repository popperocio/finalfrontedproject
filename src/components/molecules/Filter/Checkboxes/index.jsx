import React, { useContext, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

function Checkboxes() {
  const { hotels, selectedAmenities, setSelectedAmenities } = useContext(SearchContext);
  const [amenitiesList, setAmenitiesList] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const amenities = {};
    hotels.forEach(hotel => {
      hotel.amenities.forEach(amenity => {
        amenities[amenity] = false; 
      });
    });
    setAmenitiesList(amenities);
  }, [hotels]);

  const handleChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const updatedSelectedAmenities = [...selectedAmenities];
    const index = updatedSelectedAmenities.indexOf(name);
    if (checked && index === -1) {
      updatedSelectedAmenities.push(name);
    } else if (!checked && index !== -1) {
      updatedSelectedAmenities.splice(index, 1);
    }
    setState({
      ...state,
      [name]: checked,
    });
    setSelectedAmenities(updatedSelectedAmenities);
  };

  return (
     <Box sx={{ display: 'flex' }}>
       <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
         <FormLabel component="legend">Amenities</FormLabel>
         <FormGroup>
          {Object.entries(amenitiesList).map(([amenity, checked], index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox onChange={handleChange} name={amenity} data-testid="checkboxes"/>
                }
                label={amenity}
              />
            );
          })}
          </FormGroup>
        </FormControl>
      </Box>
  );
}

export { Checkboxes }