import logo from './logo.svg';
// import React, {Component} from "react";
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Purvi" title="Mahapatra" /> */}
      {/* <Greet name="Arizeet" title="Behera">
        <button>Button</button>
      </Greet>
      <Greet name="Jui" title="" />
      <Welcome name="Purvi" title="Mahapatra"/> */}
      {/* <Welcome name="Arizeet" title="Behera"/> */}
      {/* <Welcome name="Jui" title=""/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
