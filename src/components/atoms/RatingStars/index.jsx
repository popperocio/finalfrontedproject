import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export const RatingStars = (stars) => {
  
  const numericStarsValue = parseFloat(stars.stars);

  return (
          <Rating
            name="text-feedback"
            value={numericStarsValue}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            data-testid="rating"
          />
  )
}
