import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ErrorModal from './index';

describe('ErrorModal', () => {
  test('renders when there is an error', () => {
    const { getByText } = render(<ErrorModal open={true} onClose={() => {}} />);
    const text = getByText(`We couldn't process the reservation. Please, try again later`);
    expect(text).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(<ErrorModal open={true} onClose={onCloseMock} />);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
  
  test('renders nothing when open is false', () => {
    const { queryByText } = render(<ErrorModal open={false} onClose={() => {}} />);
    const text = queryByText(`We couldn't process the reservation. Please, try again later`);
    expect(text).not.toBeInTheDocument();
  });

});