import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageNumber, setImageNumber] = useState(0)

  const changeImage = () => {
    (imageNumber === 0) ? setImageNumber(1) : setImageNumber(0)
  }
  let imagenes = [
    require("./img/one-black.png"),
    require("./img/one-blue.png")
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={imagenes[imageNumber]} onClick={changeImage} />
        <p> Double Sided    </p>

      </header>
    </div >
  );
}

export default App;
