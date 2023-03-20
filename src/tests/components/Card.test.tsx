import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/card/Card';

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
  };

  test('testing single card component', () => {
    render(<Card {...props} />);

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('💚 Test Likes')).toBeInTheDocument();
    expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Location: Test Location')).toBeInTheDocument();
    expect(screen.getByText('Requirements: Test Requirements')).toBeInTheDocument();
  });
});
