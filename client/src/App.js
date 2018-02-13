
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
// import {Grid, Row, Col} from 'react-boostrap';
import {CSS, Grid, Row, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
// import Photo from './components/Pages/Photo';
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Logo from "./components/Logo";
import WebCapture from "./Pages/Webcapture";
import Display from "./Pages/Display";


class App extends Component {
  getValues = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("works fine");
  };

  render() {
    return (
      <div className="container">
      <Router>
          <Switch>
              <Route exact path="/camera" component={WebCapture} />
              <Route exact path="/" component= {Login} />
              <Route exact path="/display" component= {Display} />
          </Switch>
      </Router>
      </div>
    )
  }

};
export default App;