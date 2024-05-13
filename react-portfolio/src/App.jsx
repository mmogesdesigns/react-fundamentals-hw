import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import './index.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <About />
        <Contact />
      </div>
      <div>
        <h1>Image Gallery</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ImageOne />
          <ImageTwo />
          <ImageThree />
        </div>
      </div>
    </>
  );
}

export default App;
