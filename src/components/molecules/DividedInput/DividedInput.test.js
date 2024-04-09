import React from 'react';
import { render } from '@testing-library/react';
import { DividedInput } from './index';
import '@testing-library/jest-dom'

describe('DividedInput', () => {
  test('renders Travellers icon', () => {
    const { getByTestId } = render(<DividedInput />);
    const travellersIcon = getByTestId('travellers-icon');
    expect(travellersIcon).toBeInTheDocument();
  });

  test('renders Rooms icon', () => {
    const { getByTestId } = render(<DividedInput />);
    const roomsIcon = getByTestId('rooms-icon');
    expect(roomsIcon).toBeInTheDocument();
  });

  test('renders travellers ButtonGroups', () => {
    const { getByTestId } = render(<DividedInput />);
    const travellersButtonGroups = getByTestId('travellers-button-group');
    expect(travellersButtonGroups).toBeInTheDocument();
  });

  test('renders rooms ButtonGroups', () => {
    const { getByTestId } = render(<DividedInput />);
    const roomsButtonGroups = getByTestId('rooms-button-group');
    expect(roomsButtonGroups).toBeInTheDocument();
  });
});