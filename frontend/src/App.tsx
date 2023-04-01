import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.incrementGo}>Go!</button>
      <br></br>
    </div>
  );
}

function AmountofGo(props: any) {
  return (
    <div>
      <label>{props.show}</label>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <GoButton incrementGo={() => setCount(count + 1)} />
      <AmountofGo show={count} />
    </div>
  );
}

export default App;