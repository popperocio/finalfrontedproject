import React from 'react';
import { render } from '@testing-library/react';
import { Textfield } from './index';
import '@testing-library/jest-dom'


test('renders textfield for destination', () => {
  const { getByTestId } = render(<Textfield/>);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});

test('renders textfield without onChange prop', () => {
  const { getByTestId } = render(<Textfield />);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});

test('renders textfield with undefined onChange prop', () => {
  const { getByTestId } = render(<Textfield onChange={undefined} />);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});

test('displays error when showError is true', () => {
  const { getByTestId } = render(<Textfield showError={true} />);
  const textfield = getByTestId('texfield');
  expect(textfield).toHaveClass('MuiFormControl-root MuiTextField-root Textfield css-134uato-MuiFormControl-root-MuiTextField-root');
});

test('handles missing label when showError is true', () => {
  const { getByTestId } = render(<Textfield showError={true} />);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});

test('handles unexpected prop types gracefully', () => {
  const { getByTestId } = render(<Textfield label={123} defaultLabel={[]}/>);
  const textfield = getByTestId('texfield');
  expect(textfield).toBeInTheDocument();
});