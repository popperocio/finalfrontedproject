import React from 'react';
import { render } from '@testing-library/react';
import { RatingStars } from './index';
import '@testing-library/jest-dom'


test('renders rating component', () => {
  const { getByTestId} = render(<RatingStars stars={4}/>);
 
  const component = getByTestId('rating');

  expect(component).toBeInTheDocument();
});