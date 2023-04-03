import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../../screens/about/About';
import Error from '../../screens/error/Error';
import Home from '../../screens/home/Home';
import NewCard from '../../screens/new-card/NewCard';

const RoutesComponent = () => (
  <Routes>
    <Route
      data-testid="main-page"
      path="/"
      element={<Home advice="Think green and plant something" />}
    />

    <Route
      data-testid="about-page"
      path="/about"
      element={
        <About
          title="
              Welcome to our Plants Store About Page!
            "
          message="We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!"
        />
      }
    />

    <Route
      data-testid="error-page"
      path="*"
      element={<Error errorMessage="Oops! Something went wrong. Please try again later." />}
    />

    <Route data-testid="card-page" path="/card" element={<NewCard />} />
  </Routes>
);

export default RoutesComponent;
