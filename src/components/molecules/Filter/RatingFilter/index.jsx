import React from 'react';
import {  useState, useContext } from 'react';
import './RatingFilter.css'
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';
import { Rating } from './Rating';


function RatingFilter () {
    const [ isClicked, setIsClicked ] = useState(false);
    const [ selectedKey, setSelectedKey ] = useState(null);
    const { selectedRating, setSelectedRating } = useContext(SearchContext);
    const ratings= [1,2,3,4,5];
    
    const handleRating = (newRating) => {
        if (selectedKey === newRating) {
            setSelectedKey(null);
            setIsClicked(isClicked);
        } else {
            setSelectedKey(newRating);
            setIsClicked(!isClicked);
        }
        setSelectedRating(newRating === selectedRating ? null : newRating);
    };

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer' data-testid="ratingcontainer">
                {ratings.map((rating) => (
                     <div className={`RatingStarsContainer ${selectedKey=== rating ? 'clicked' : ''}`} 
                        key={`rating-${rating}`} 
                        onClick={() => handleRating(rating)}
                        data-testid={`rating-${rating}`}>
                        <Rating stars={rating}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { RatingFilter }