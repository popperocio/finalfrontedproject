import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroups from './index';

describe('ButtonGroups Component', () => {
  test('should render with initial count of 1', () => {
    render(<ButtonGroups id="button-groups" onQuantityChange={() => {}} />);
    const countElement = screen.getByText('1');
    expect(countElement).toBeInTheDocument();
  });

  test('should increase count when + button is clicked', () => {
    render(<ButtonGroups id="button-groups" onQuantityChange={() => {}} />);
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    const countElement = screen.getByText('2');
    expect(countElement).toBeInTheDocument();
  });

  test('should decrease count when - button is clicked and count is more than 1', () => {
    const onQuantityChange = jest.fn();
    render(<ButtonGroups id="button-groups" onQuantityChange={onQuantityChange} />);

    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    
    const countElement = screen.getByText('2');
    expect(countElement).toBeInTheDocument();
    expect(onQuantityChange).toHaveBeenCalledWith(2); 
  });

  test('should not decrease count below 1', () => {
    const onQuantityChange = jest.fn();
    render(<ButtonGroups id="button-groups" onQuantityChange={onQuantityChange} />);
    
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    
    const countElement = screen.getByText('1');
    expect(countElement).toBeInTheDocument();
    expect(onQuantityChange).not.toHaveBeenCalled();  
  });

  test('should disable decrease button when count is 1', () => {
    render(<ButtonGroups id="button-groups" onQuantityChange={() => {}} />);
    const decreaseButton = screen.getByText('-');
    expect(decreaseButton).toBeDisabled();
  });

  test('should call onQuantityChange with correct value when count is increased', () => {
    const onQuantityChange = jest.fn();
    render(<ButtonGroups id="button-groups" onQuantityChange={onQuantityChange} />);
    
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    
    expect(onQuantityChange).toHaveBeenCalledWith(2);
  });

  test('should call onQuantityChange with correct value when count is decreased', () => {
    const onQuantityChange = jest.fn();
    render(<ButtonGroups id="button-groups" onQuantityChange={onQuantityChange} />);
    
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    
    expect(onQuantityChange).toHaveBeenCalledWith(2);
  });

  test('should render with different id and apply data-testid correctly', () => {
    render(<ButtonGroups id="unique-button-group" onQuantityChange={() => {}} />);
    const buttonGroup = screen.getByTestId('unique-button-group');
    expect(buttonGroup).toBeInTheDocument();
  });

  test('should apply correct CSS classes', () => {
    render(<ButtonGroups id="button-groups" onQuantityChange={() => {}} />);
    const buttonGroup = screen.getByTestId('button-groups');
    expect(buttonGroup).toHaveClass('ButtonGroup');
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => expect(button).toHaveClass('ButtonGroupButton'));
  });
});
