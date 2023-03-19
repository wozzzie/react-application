import React, { Component } from "react";

import "./Error.css";

interface ErrorProps {
  errorMessage: string;
}

class Error extends Component<ErrorProps> {
  render(): JSX.Element {
    const { errorMessage } = this.props;

    return (
      <div className="error__page">
        <div className="error" data-testid="error-page">
          <div className="error__404">404</div>
          <div className="error__link">{errorMessage}</div>
        </div>
        <div className="error__img"></div>
      </div>
    );
  }
}

export default Error;
