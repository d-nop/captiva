import React from "react";
import {Navbar} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Register from "../Register/Register.js";
import Signin from "../SignIn/Signin.js";
import {NavItem} from "react-bootstrap";

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
    </Navbar.Header>
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


// <Navbar.Header>
//         <Navbar.Brand>
//           <a href="#home"></a>
//           <img src="../assets/images/geoLocationIcon.png" alt="geolocation"width="34" height="34"/>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
      
//       </Navbar.Collapse>