import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Popup from '../../../components/form/popup';

describe('Popup', () => {
  const handleClosePopup = vi.fn();
  const message = 'This is a test message';

  beforeEach(() => {
    handleClosePopup.mockClear();
  });

  it('renders correctly', () => {
    render(<Popup message={message} handleClosePopup={handleClosePopup} showPopup={true} />);

    expect(screen.queryByText('Hooray!')).toBeInTheDocument();
    expect(screen.queryByText(message)).toBeInTheDocument();
    expect(screen.queryByText('OK')).toBeInTheDocument();
  });

  it('calls handleClosePopup when OK button is clicked', () => {
    render(<Popup message={message} handleClosePopup={handleClosePopup} showPopup={true} />);

    fireEvent.click(screen.getByText('OK'));

    expect(handleClosePopup).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('popup-container')).toHaveClass('popup popup__open');
  });

  it('does not render when showPopup is false', () => {
    render(<Popup message={message} handleClosePopup={handleClosePopup} showPopup={false} />);
    expect(screen.getByTestId('popup-container')).toHaveClass('popup');
  });
});
