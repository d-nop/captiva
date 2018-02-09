import React, { Component } from "react";
import { Grid, Row, Navbar, Col } from "react-bootstrap";
import "./App.css";

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
        <Nav />
        <Grid>
          <Row>
            <Col md={12}>
              <Logo />
            </Col>
          </Row>
          <Login/>
          <Row>
          <Multimedia/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;