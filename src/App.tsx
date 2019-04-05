import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';

function App() {
  const [state, setState] = useState("initial")
  useEffect(() => {
    const time = 500
    setTimeout(() => {
      setState(`after ${time} second`)
    }, time);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p>
          hello, this is an single page app build by react and create-react-app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
        <div className="main">
          <p>{state}</p>
        </div>
      </header>
    </div>
  )
}

export default App;
