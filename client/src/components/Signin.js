import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Signin = ( props ) => {
  return (
 	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="large" id="signinButton">
		Sign In
		</Button>
	</ButtonToolbar>
	
	);
  
 };

  
export default Signin
