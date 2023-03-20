import React from 'react';

import Header from './components/header/Header';
import RoutesComponent from './components/routes/RoutesComponent';

class App extends React.Component {
  render() {
    return (
      <>
        <Header home={'Home page'} about={'About us'} />
        <RoutesComponent />
      </>
    );
  }
}

export default App;
