import React from 'react';
import { render } from '@testing-library/react';
import { RatingStars } from './index';
import '@testing-library/jest-dom'


test('renders rating component', () => {
  const { getByRole } = render(<RatingStars stars={4} />);

  const ratingComponent = getByRole('img');
  
  expect(ratingComponent).toBeInTheDocument();
});
