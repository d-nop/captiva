import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Video from './components/multi-media/VideoCapture';
import WebCapture from './components/multi-media/WebCapture';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Switch>
                <Route exact path="/video" component={Video} />
         
                <Route exact path="/camera" component={WebCapture} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <div>
    //         <Locator />
    //         <Video />
    //         <CamCapture />
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
