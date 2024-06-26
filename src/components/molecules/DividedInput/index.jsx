import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import ButtonGroups from '../ButtonGroup';
import './DividedInput.css'

export const DividedInput = ({onTravellersQuantityChange, onRoomsQuantityChange}) => {
  return (
    <div className='DividedInput'>
        <div className='Travellers' data-testid="travellers-icon">
            <PersonIcon style={{ margin: '8px' }} />
            <ButtonGroups id="travellers-button-group" 
              onQuantityChange={onTravellersQuantityChange}
            />
        </div>
        <div className='Rooms' data-testid="rooms-icon">
            <HotelIcon style={{ margin: ' 8px' }} />
            <ButtonGroups id="rooms-button-group" 
              onQuantityChange={onRoomsQuantityChange}
            />
        </div> 
    </div>
   
  )
}
