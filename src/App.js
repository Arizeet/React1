import logo from './logo.svg';
// import React, {Component} from "react";
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Purvi" title="Mahapatra">
        <p>This is child tag</p>
      </Greet>
      <Greet name="Arizeet" title="Behera">
        <button>Button</button>
      </Greet>
      <Greet name="Jui" title="" />
      <Welcome name="Purvi" title="Mahapatra"/>
      <Welcome name="Arizeet" title="Behera"/>
      <Welcome name="Jui" title=""/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
