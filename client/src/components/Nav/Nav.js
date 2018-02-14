import React from "react";
import {Navbar} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import logo from "../../utils/assets/images/clickablePawTransparent.png";
import "./Nav.css"

  const Nav = ( props ) => {

  const onSubmit = (event) => {
      event.preventDefault();
      console.log("works fine");
  };

 return(

 	<div >
    <Navbar id="navbar" > 
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"><img src= {logo} alt="geolocation"width="35" height="35"/> <h2>Captiva</h2></a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse> {" "}
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