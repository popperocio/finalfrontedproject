import React from 'react';
import { render } from '@testing-library/react';
import { Textfield } from './index';
import '@testing-library/jest-dom'


test('renders textfield for destination', () => {
  const { container } = render(<Textfield/>);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
});

test('renders textfield without onChange prop', () => {
  const { container } = render(<Textfield/>);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
});

test('renders textfield with undefined onChange prop', () => {
  const { container } = render(<Textfield onChange={undefined} />);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
});

test('displays error when showError is true', () => {
  const { container } = render(<Textfield showError={true} />);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
  expect(container.querySelector('.Textfield')).toHaveClass('MuiFormControl-root');
  expect(container.querySelector('.Textfield')).toHaveClass('MuiTextField-root');
});

test('handles missing label when showError is true', () => {
  const { container } = render(<Textfield showError={true} />);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
});

test('handles unexpected prop types gracefully', () => {
  const { container } = render(<Textfield label={123} defaultLabel={[]} />);
  const textfield = container.querySelector('input');
  expect(textfield).toBeInTheDocument();
});
