import * as React from 'react';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './ButtonGroup.css'


const ButtonGroups = ({id, onQuantityChange}) => {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      onQuantityChange(count -1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
    onQuantityChange(count +1);
  };

  return (
        <ButtonGroup
          aria-label="radius button group"
          data-testid={id}
          className='ButtonGroup'
        >
          <>
            <Button 
              className='ButtonGroupButton'
              sx={{'&.MuiButtonGroup-grouped': { maxWidth: 'auto' }}}
              onClick={decreaseCount}
              disabled={count <= 1} 
            >-</Button>
            <h3  style={{ margin: '0', padding: '8px', fontWeight:"lighter" }}> {count} </h3>
            <Button
              className='ButtonGroupButton' 
              sx={{'&.MuiButtonGroup-grouped': { maxWidth: 'auto' } }}
              onClick={increaseCount}
            >+</Button>
        
          </>

    </ButtonGroup>
 
  )
}
export default ButtonGroups