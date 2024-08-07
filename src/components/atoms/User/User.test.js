import React from 'react';
import { render } from '@testing-library/react';
import { User } from './index';
import '@testing-library/jest-dom'


test('renders user icon', () => {
  const { container } = render(<User />);
  
  const userIcon = container.querySelector('svg');
  
  expect(userIcon).toBeInTheDocument();
  expect(userIcon).toHaveClass('MuiSvgIcon-root');
  expect(userIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
});