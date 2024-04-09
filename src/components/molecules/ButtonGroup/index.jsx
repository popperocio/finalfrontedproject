import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const ButtonGroups = ({id}) => {
  return (
        <ButtonGroup
        aria-label="radius button group"
        sx={{ '--ButtonGroup-radius': '40px'}}
        data-testid={id}
        >
          <>
            <Button sx={{ width:"30px", height:"30px",fontSize: '12px', padding: '4px' , border: "1px solid rgb(188, 186, 186)",borderRight: "1px solid rgb(188, 186, 186); !important", '&.MuiButtonGroup-grouped': { minWidth: 'auto' } }} >-</Button>
            <h3  style={{ margin: '0', padding: '8px', fontWeight:"lighter" }}> 1</h3>
            <Button sx={{ width:"30px", height:"30px",fontSize: '12px', padding: '4px', border: "1px solid rgb(188, 186, 186)", borderRight: "1px solid rgb(188, 186, 186); !important", '&.MuiButtonGroup-grouped': { minWidth: 'auto' } }}>+</Button>
        
          </>

    </ButtonGroup>
 
  )
}
export default ButtonGroups