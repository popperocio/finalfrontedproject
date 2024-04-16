import React from 'react';
import './Filter.css'
import { RatingFilter } from './RatingFilter';
import { Checkboxes} from './Checkboxes';

function Filter () {

    return (
        <div className='FilterContainer'>
            <RatingFilter/>
            <Checkboxes/>
        </div>
    )
}

export { Filter }