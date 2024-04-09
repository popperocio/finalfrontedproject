import React from 'react';
import './SearchBar.css';

import { Textfield } from '../../atoms/Textfield';
import { DividedInput } from '../../molecules/DividedInput';
import { SearchButton } from '../../atoms/SearchButton';


function SearchBar() {

  return (
    <div className='SearchBarContainer' data-testid="searchbar">
      <Textfield label="Destination"/>
      <DividedInput/>
      <SearchButton/>
    </div>
  );
}

export { SearchBar };