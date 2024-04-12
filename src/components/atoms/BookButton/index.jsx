import React,  { useState }from 'react'
import Button from '@mui/material/Button';
import LuggageIcon from '@mui/icons-material/Luggage';


export const BookButton = () => {
  
  const handleBook = () => {
    setOpenModal(true); 
  };

  return (
    <div>
      <Button variant="contained" startIcon={<LuggageIcon />} sx={{marginTop:"10px"}} onClick={handleBook}>
        Book now
      </Button>
    </div>
  );
};