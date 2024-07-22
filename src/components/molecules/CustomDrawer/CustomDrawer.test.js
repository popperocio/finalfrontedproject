import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomDrawer } from './index';

describe('CustomDrawer Component', () => {
  test('should render drawer and open it when the menu button is clicked', () => {
    render(<CustomDrawer />);
    const menuButton = screen.getByTestId("MenuIcon");
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    const accountText = screen.getByText('My Account');
    const cartText = screen.getByText('Cart');
    expect(accountText).toBeInTheDocument();
    expect(cartText).toBeInTheDocument();
  });

  test('should not render drawer content when drawer is closed', () => {
    render(<CustomDrawer />);
    expect(screen.queryByText('My Account')).not.toBeInTheDocument();
    expect(screen.queryByText('Cart')).not.toBeInTheDocument();
  });
  
});