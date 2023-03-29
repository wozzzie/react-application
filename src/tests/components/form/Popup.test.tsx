import React from 'react';

import { test, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Popup from '../../../components/form/popup';

test('Popup renders correctly when showPopup is true', () => {
  const { getByText } = render(
    <Popup message="Test message" onClose={() => {}} showPopup={true} />
  );
  const popupElement = getByText('Hooray!');
  const messageElement = getByText('Test message');
  const buttonElement = getByText('OK');

  expect(popupElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('Popup does not render when showPopup is false', () => {
  const { queryByText } = render(
    <Popup message="Test message" onClose={() => {}} showPopup={false} />
  );
  const popupElement = queryByText('Hooray!');

  expect(popupElement).toBeInTheDocument();
});

test('onClose is called when OK button is clicked', () => {
  const onCloseMock = vi.fn();
  const { getByText } = render(
    <Popup message="Test message" onClose={onCloseMock} showPopup={true} />
  );
  const buttonElement = getByText('OK');

  fireEvent.click(buttonElement);
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});
