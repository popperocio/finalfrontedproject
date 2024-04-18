import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Textfield.css'

export const Textfield = ({label, onChange}) => {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
      <Box
          component="form"
          noValidate
          autoComplete="on"
          className='Box'
      >
          <TextField id="outlined-basic" 
            className='Textfield'
            label={label} 
            variant="outlined" 
            sx={{background:"white"}} 
            onChange={handleInputChange}
            data-testid="texfield"/>
       </Box>
    
  )
}

