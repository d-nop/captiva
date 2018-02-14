import React from "react";
import { Grid } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "../../utils/assets/images/PawLogo.png";
import "./Logo.css"

const Logo = props => {
	const onSubmit = event => {
		event.preventDefault();
		
	};

	return (
    
		<Row>
  			<Col xs={12}>
  			   <Row center="xs">
      		      <img src={logo} onSubmit={this.submit} id="logo"/>
      			</Row>
      			 <Row center="xs">
      		      <h1>Captiva</h1>
      			</Row>
      			   			
  			</Col>
  		</Row>
		
	);
};

export default Logo;

