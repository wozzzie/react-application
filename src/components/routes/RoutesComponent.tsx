import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import About from "../../screens/about/About";
import Error from "../../screens/error/Error";
class RoutesComponent extends Component {
  render(): JSX.Element {
    return (
      <Routes>
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
          element={
            <Error errorMessage="Oops! Something went wrong. Please try again later." />
          }
        />
      </Routes>
    );
  }
}

export default RoutesComponent;
