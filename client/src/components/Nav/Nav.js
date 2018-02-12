import React from "react";
import {Navbar} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
// import Signin from "./Signin.js";
// import Register from "./Register.js";

  const Nav = ( props ) => {

  const onSubmit = (event) => {
      event.preventDefault();
      console.log("works fine");
  };

 return(

 	<div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"></a>
          <img src="../assets/images/geoLocationIcon.png" alt="geolocation"width="34" height="34"/>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button id="searchBtn" type="submit" onClick= {onSubmit}>Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
</div>

 	)

};

export default Nav;

// return (
// <div>
// 	<div className="d-flex justify-content-center">
// 	<img src="/assets/images/logo.jpg" />
// 	</div>

// 	<div className="d-flex justify-content-center">
// 	<h1>Captiva</h1>
// 	</div>

// </div>