import React from 'react';
import { vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Popup from '../../../components/form/popup';
import renderWithProviders from '../../../tools/tests/test-utilits';

describe('Popup', () => {
  const handleClosePopup = vi.fn();
  const message = 'This is a test message';

  beforeEach(() => {
    handleClosePopup.mockClear();
  });

  it('renders correctly', () => {
    renderWithProviders(
      <Popup message={message} handleClosePopup={handleClosePopup} showPopup={true} />
    );

    expect(screen.queryByText('Hooray!')).toBeInTheDocument();
    expect(screen.queryByText(message)).toBeInTheDocument();
    expect(screen.queryByText('OK')).toBeInTheDocument();
  });

  it('calls handleClosePopup when OK button is clicked', () => {
    renderWithProviders(
      <Popup message={message} handleClosePopup={handleClosePopup} showPopup={true} />
    );

    fireEvent.click(screen.getByText('OK'));

    expect(handleClosePopup).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('popup-container')).toHaveClass('popup popup__open');
  });

  it('does not render when showPopup is false', () => {
    renderWithProviders(
      <Popup message={message} handleClosePopup={handleClosePopup} showPopup={true} />
    );

    expect(screen.getByTestId('popup-container')).toHaveClass('popup');
  });
});
