import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="color-app">
        <Navbar />
        <div className="container">
            <Card colorHex="#0044FF"/>
        </div>
    </div>
  );
}

export default App;
