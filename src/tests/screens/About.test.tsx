import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../../screens/about/About';

describe('About screen', () => {
  it('testing About title', () => {
    render(
      <About
        title="
  Welcome to our Plants Store About Page!
"
        message="We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!"
      />
    );
    const title = screen.queryByText(/Welcome to our Plants Store About Page!/i);
    expect(title).toBeVisible();
  });

  it('testing About subTitle', () => {
    render(
      <About
        title="
  Welcome to our Plants Store About Page!
"
        message="We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!"
      />
    );
    const subTitle = screen.queryByText(
      /We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!/i
    );
    expect(subTitle).toBeVisible();
  });
});
