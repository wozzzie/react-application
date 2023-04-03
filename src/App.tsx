import React from 'react';

import Header from './components/header/Header';
import RoutesComponent from './components/routes/RoutesComponent';

const App = () => {
  return (
    <>
      <Header home={'Home page'} about={'About us'} card={'Create card'} />
      <RoutesComponent />
    </>
  );
};

export default App;
