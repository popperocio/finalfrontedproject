import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './index';
import '@testing-library/jest-dom'

jest.mock('../../assets/Logo/logo.png', () => 'logo-image');

test('renders user icon', () => {
  const { getByTestId } = render(<Navbar/>);
  const navbar = getByTestId('navbar');
  const cart = getByTestId('LocalMallIcon'); 
  const user = getByTestId('user-icon'); 
  expect(navbar).toBeInTheDocument();
  expect(cart).toBeInTheDocument();
  expect(user).toBeInTheDocument();
});