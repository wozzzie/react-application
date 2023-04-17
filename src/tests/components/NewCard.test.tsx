import React from 'react';

import { render } from '@testing-library/react';
import NewCard from '../../screens/new-card/NewCard';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('FormCard', () => {
  it('renders NewCard component', () => {
    render(
      <Provider store={store}>
        <NewCard />
      </Provider>
    );
  });

  it('displays the correct text content', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NewCard />
      </Provider>
    );
    expect(getByText(/Tell us a little about yourself and your preferences/i)).toBeInTheDocument();
    expect(
      getByText(/Indicate how we can contact you, your preferences, your location/i)
    ).toBeInTheDocument();
    expect(
      getByText(/Also indicate your preferred delivery date and upload a photo/i)
    ).toBeInTheDocument();
    expect(getByText(/We are waiting for your reply/i)).toBeInTheDocument();
  });

  it('displays the image', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <NewCard />
      </Provider>
    );
    expect(getByAltText('')).toHaveAttribute('src', '/img/card-plant.png');
  });

  it('renders Form component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NewCard />
      </Provider>
    );
    expect(getByTestId('form-component')).toBeInTheDocument();
  });
});
