import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./Navbar"
import Homepage from "./Hame"

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Homepage />
       
      </div>
    </div>
  );
}

export default App;
