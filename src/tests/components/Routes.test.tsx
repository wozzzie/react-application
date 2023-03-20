import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoutesComponent from '../../components/routes/RoutesComponent';

describe('Routes Component', () => {
  it('testing render of the main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RoutesComponent />
      </MemoryRouter>
    );

    const mainPage = screen.getByTestId('main-page');
    expect(mainPage).toBeInTheDocument();
  });

  it('testing render of the about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <RoutesComponent />
      </MemoryRouter>
    );

    const aboutPage = screen.getByTestId('about-page');
    expect(aboutPage).toBeInTheDocument();

    const title = screen.getByText(/Welcome to our Plants Store About Page!/i);
    expect(title).toBeInTheDocument();

    const message = screen.getByText(
      /We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!/i
    );
    expect(message).toBeInTheDocument();
  });

  it('testing render of the error page', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <RoutesComponent />
      </MemoryRouter>
    );

    const errorPage = screen.getByTestId('error-page');
    expect(errorPage).toBeInTheDocument();

    const errorMessage = screen.getByText(/Oops! Something went wrong. Please try again later./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
