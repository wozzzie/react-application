import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import About from "../../screens/about/About";

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
      </Routes>
    );
  }
}

export default RoutesComponent;
