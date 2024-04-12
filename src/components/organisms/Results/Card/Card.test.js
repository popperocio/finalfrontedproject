import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom'


test('renders card component with correct information', () => {
  const image = 'sample_image_url';
  const name = "hotel name";
  const address = "5th Av. 890"
  const { getByTestId } = render(
                                <Card 
                                    image={image} 
                                    hotel_name={name} 
                                    address= {address}
                                />
  );
  const renderedImage = getByTestId('cardImage');
  const renderedName = getByTestId('hotelName');
  const renderedAddress = getByTestId('address');

  expect(renderedImage).toBeInTheDocument();
  expect(renderedImage.alt).toBe('hotel image');
  expect(renderedName).toBeInTheDocument();
  expect(renderedAddress).toBeInTheDocument();
});