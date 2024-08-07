import React from 'react';
import { render } from '@testing-library/react';
import { Cart } from './index';
import '@testing-library/jest-dom'


test('renders Cart icon', () => {
  const { container } = render(<Cart />);
  
  const cartIcon = container.querySelector('svg');
  
  expect(cartIcon).toBeInTheDocument();
  expect(cartIcon).toHaveClass('MuiSvgIcon-root');
  expect(cartIcon).toHaveStyle('color: white');
});

