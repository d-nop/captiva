import React from "react"
import {Grid} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {ButtonToolbar} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap'; 

const Logo = ( props ) => {

	const onSubmit = (event) => {
	  	event.preventDefault();
	  	console.log("works fine");
	};

return (
	<div id="logoImage">
	<Col xs={6} md={4}>
	<img src="../assets/images/media1.png" alt="logo"width="100" height="100" circle />
	<h1>Captiva</h1>
	<br/><br/><br/>
	<ButtonToolbar >
    <Button bsStyle="primary" bsSize="large" id= "loginInButton">
     Sign Up
    </Button>
    </ButtonToolbar>
    </Col>
    </div>

 );
};



export default Logo; 
// 	return (
// 		<div>
// 		<div className="d-flex justify-content-center">
		
// 		</div>

// 		<div className="d-flex justify-content-center">
// 		<h1>Captiva</h1>
// 		</div>

// 	</div>
// 	);




