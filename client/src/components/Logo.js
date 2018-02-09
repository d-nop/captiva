import React from "react";
import { Grid } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Logo = props => {
	const onSubmit = event => {
		event.preventDefault();
		console.log("works fine");
	};

	return (
		<div>
			<img
				src="../assets/images/media1.png"
				alt="logo"
				width="100"
				height="100"
				className="logo-image"
			/>
			<h1 className="logo-text">Captiva</h1>
		</div>
	);
};

export default Logo;

