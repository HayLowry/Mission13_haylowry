import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Headshot from './JoelHiltonHeadshot.jpg';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Joel Hilton's Movie site</h1>
      <img src={Headshot} alt="Joel Hilton Headshot" />
      <br />
      <p>
        This site is to display and track Joel Hilton's favorite movies of all
        time!
      </p>
    </div>
  );
}

export default App;
