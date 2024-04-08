import React from 'react';
import { render } from '@testing-library/react';
import { Textfield } from './index';
import '@testing-library/jest-dom'


test('renders textfield for destination', () => {
  const { getByTestId } = render(<Textfield/>);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});