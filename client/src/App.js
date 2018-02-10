
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Grid, Row, Col } from "react-bootstrap";

import logo from './logo.svg';
import './App.css';
import Video from './components/multi-media/VideoCapture';
import WebCapture from './components/multi-media/WebCapture';


import Nav from "./components/Nav";
import Login from "./components/pages/Login";
import Logo from "./components/Logo";
import Home from "./components/pages/Home";
import Media from "./components/pages/Media";
import Multimedia from "./components/pages/Multimedia";

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
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Router>
                 <div>
                   <Route exact path="/" component={Login} />
                   <Route exact path="/login" component={Login} />
                   <Route exact path="/media" component={Media} />
                   <Route path="/multimedia" component={Multimedia} />
                 </div>
               </Router>;
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;