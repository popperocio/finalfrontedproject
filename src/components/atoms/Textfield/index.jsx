import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Textfield.css'

export const Textfield = ({defaultLabel,label, onChange, showError}) => {

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
          <TextField
            error={showError}
            id="outlined-error-helper-text"
            label={label}
            defaultlabel={defaultLabel} 
            variant="outlined" 
            sx={{background:"white"}} 
            onChange={handleInputChange}
            data-testid="texfield"/>
       </Box>
    
  )
}

