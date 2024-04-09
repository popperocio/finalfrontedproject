import React from 'react';
import { render } from '@testing-library/react';
import { Calendar } from './index';
import '@testing-library/jest-dom'


test('renders calendar', () => {
    const { getByPlaceholderText } = render(<Calendar/>);
    const inputField = getByPlaceholderText('MM/DD/YYYY');
    expect(inputField).toBeInTheDocument();
});