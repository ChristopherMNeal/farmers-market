import React from "react";
import Header from "./Header.js";
import ProduceList from "./ProduceList.js";
import MarketController from "./MarketController.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProduceList />
      <MarketController />
    </React.Fragment>
  );
}

export default App;
