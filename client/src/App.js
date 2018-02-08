import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Locator from './components/geoLocated';
import Video from './components/videoCapture';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <Locator />
        <Video />
         
        </p>
      </div>
    );
  }
}

export default App;
