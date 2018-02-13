import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Grid, Row, Col} from 'react-boostrap';
import { CSS, Grid, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
// import Photo from './components/Pages/Photo';
import Nav from "./components/Nav";
import Login from "./Pages/Login";
// import Logo from "./components/Logo";
import WebCapture from "./Pages/WebCapture/WebCapture.js";
import react from "react-router-dom";
import MediaDisplay from "./Pages/MediaDisplay/MediaDisplay.js";
import Capture from "./Pages/WebCapture/Capture.js"

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
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/WebCapture" component={WebCapture} />
          <Route exact path="/Capture" component={Capture} />
          <Route exact path="/MediaDisplay" component={MediaDisplay} />
          <Route component={Login}/>
        </Switch>
      </Router>
    );
  }
}
export default App;

// // // // <Col md={12}>
// // // //             <Login/>
// // // //             </Col>

// // // <Row>
// // //             <WebCapture/>
// // //             </Row>

// // <section>
// //       <Nav/>
// //       </section>

//  <Grid>

//           <Row>
//             <Login/>
//             </Row>
//            </Grid>
//       </div>
//       <div>
