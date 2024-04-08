import React from 'react';
import { render } from '@testing-library/react';
import { Cart } from './cart';
import '@testing-library/jest-dom'


test('renders Cart icon', () => {
  const { getByTestId } = render(<Cart/>);
  const cartIcon = getByTestId('LocalMallIcon');
  expect(cartIcon).toBeInTheDocument();
  expect(cartIcon).toHaveClass('MuiSvgIcon-root');
});