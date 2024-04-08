import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Textfield = () => {

  return (
      <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' }, 
          }}
          noValidate
          autoComplete="off"
      >
          <TextField id="outlined-basic" label="Destination" variant="outlined" sx={{background:"white"}} data-testid="texfield"/>
       </Box>
    
  )
}

