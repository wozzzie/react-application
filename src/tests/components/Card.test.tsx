import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../../components/card/Card';
import renderWithProviders from '../../tools/tests/test-utilits';

describe('Card component', () => {
  const props = {
    id: 'test-id',
    key: 'test-key',
    image: 'test-image-url',
    title: 'Test Title',
    author: 'Test Author',
    description: 'Test Description',
    location: 'Test Location',
    likes: 'Test Likes',
    requirements: 'Test Requirements',
    onClick: () => console.log('Card clicked'),
  };

  test('testing single card component', () => {
    renderWithProviders(<Card {...props} />);

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('💚 Test Likes')).toBeInTheDocument();
    expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
    expect(screen.getByText('Location: Test Location')).toBeInTheDocument();
  });
});
