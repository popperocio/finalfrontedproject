import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Textfield = ({label, onChange}) => {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
      <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' }, 
          }}
          noValidate
          autoComplete="on"
      >
          <TextField id="outlined-basic" 
            label={label} 
            variant="outlined" 
            sx={{background:"white"}} 
            onChange={handleInputChange}
            data-testid="texfield"/>
       </Box>
    
  )
}

