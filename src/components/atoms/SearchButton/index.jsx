import React from 'react'
import './SearchButton.css'

function SearchButton ({onClick}) {
  return (
    <button className='SearchButton' data-testid="search-btn" onClick={onClick}>Search</button>
  );
}
export { SearchButton }

