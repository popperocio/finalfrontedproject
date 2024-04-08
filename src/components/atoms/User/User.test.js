import React from 'react';
import { render } from '@testing-library/react';
import { User } from './index';
import '@testing-library/jest-dom'


test('renders user icon', () => {
  const { getByTestId } = render(<User/>);
  const userIcon = getByTestId('user-icon');
  expect(userIcon).toBeInTheDocument();
  expect(userIcon).toHaveClass('MuiSvgIcon-root');
});