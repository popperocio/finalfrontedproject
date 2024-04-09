import * as React from 'react';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const ButtonGroups = ({id}) => {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
        <ButtonGroup
        aria-label="radius button group"
        sx={{ '--ButtonGroup-radius': '40px'}}
        data-testid={id}
        >
          <>
            <Button 
              sx={{ width:"30px", height:"30px",fontSize: '12px', padding: '4px' , border: "1px solid rgb(188, 186, 186)",borderRight: "1px solid rgb(188, 186, 186); !important", '&.MuiButtonGroup-grouped': { minWidth: 'auto' } }}
              onClick={decreaseCount}
              disabled={count <= 1} 
            >-</Button>
            <h3  style={{ margin: '0', padding: '8px', fontWeight:"lighter" }}> {count} </h3>
            <Button 
              sx={{ width:"30px", height:"30px",fontSize: '12px', padding: '4px', border: "1px solid rgb(188, 186, 186)", borderRight: "1px solid rgb(188, 186, 186); !important", '&.MuiButtonGroup-grouped': { minWidth: 'auto' } }}
              onClick={increaseCount}
            >+</Button>
        
          </>

    </ButtonGroup>
 
  )
}
export default ButtonGroups