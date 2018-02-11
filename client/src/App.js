
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
// import {Grid, Row, Col} from 'react-boostrap';
import {CSS, Grid, Row, Col} from 'react-boostrap';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Pages/Photo';
import Nav from "./components/Nav";
import Login from "./components/Login";
import Logo from "./components/Logo";
import Home from "./components/Pages/Home.js";
import Media from "./components/Pages/Media.js";


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
        <Nav />
        <Grid>
          <Row>
            <Col md={12}>
              <Logo />
            </Col>
          </Row>
          <Login/>
          <Row>
          <Photo/>
          </Row>
        </Grid>
      </div>
    )
  }

};
export default App;