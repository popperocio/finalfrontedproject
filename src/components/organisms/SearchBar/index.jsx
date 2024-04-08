import React from 'react';
import './SearchBar.css';

import { Textfield } from '../../atoms/Textfield';


function SearchBar() {

  return (
    <div className='SearchBarContainer' data-testid="searchbar">
      <Textfield label="Destination"/>
    </div>
  );
}

export { SearchBar };