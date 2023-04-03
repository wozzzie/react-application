import React from 'react';

import './Error.css';

type ErrorProps = {
  errorMessage: string;
};

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className="error__page">
      <div className="error" data-testid="error-page">
        <div className="error__404">404</div>
        <div className="error__link">{errorMessage}</div>
      </div>
      <div className="error__img"></div>
    </div>
  );
};

export default Error;
