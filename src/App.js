import React, { useState, useEffect } from "react";
import Mood from "./Component/Mood";
import Random from "./Component/Random";
import Giphy from "./Component/Giphy";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Giphy</h2>
        <Mood></Mood>
        <Giphy></Giphy>
      </div>
    </React.Fragment>
  );
}

export default App;
