import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ConfirmationModal from './index';

describe('ConfirmationModal', () => {
  test('renders with correct email address', () => {
    const email = 'example@example.com';
    const { getByText } = render(<ConfirmationModal email={email} open={true} onClose={() => {}} />);
    const emailText = getByText(`We sent your vouchers to ${email}`);
    expect(emailText).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(<ConfirmationModal email="example@example.com" open={true} onClose={onCloseMock} />);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});