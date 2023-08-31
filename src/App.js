import React, { useState } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const [reset, setReset] = useState(0);

  const handleReset = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div class="container-titulo">Calculator</div>

      <div class="container">
        
        <div class="container-visor">
          <span>{clicks}</span>
        </div>

        <div class="container-button">
          <button id="click" type="button" to={"/"} onClick={handleClick}>
            Click
          </button>
          <button id="reset" type="button" to={"/"} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div class="box_copyright">
        <hr />
        <p>
          Todos los derechos reservados © 2023. Created By
          <b>Gabeto-ADB</b>
        </p>
      </div>
    </div>
  );
}

export default App;
