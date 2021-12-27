import React from "react";
import MySlider from "./components/MySlider";
import img1 from "./images/capture330.jpg";
import img2 from "./images/capture331.jpg";
import img3 from "./images/capture332.jpg";
import img4 from "./images/capture333.jpg";
import img5 from "./images/capture334.jpg";
import img6 from "./images/capture335.jpg";
import img7 from "./images/capture336.jpg";
import img8 from "./images/capture337.jpg";
import img9 from "./images/capture338.jpg";
import img10 from "./images/capture339.jpg";
import './App.css';

function App() {
  const imgUrls: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MySlider ImageUrls={imgUrls}/>
        </p>
      </header>
    </div>
  );
}

export default App;
