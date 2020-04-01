import React from "react";
import hero from "./assets/images/herococktail.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>Drinks please!</strong> An easy way to make your new favorite
        drink.
      </header>
      <hero />
      <img
        style={{ width: "30%", height: "30%" }}
        src={hero}
        alt="old fashioned cocktail"
      />
    </div>
  );
}

export default App;
