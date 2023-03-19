import React from "react";

import Header from "./components/header/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header home={"Home page"} about={"About page"} />
      </>
    );
  }
}

export default App;
