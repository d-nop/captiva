import React from "react";
import { Grid } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Logo = props => {
	const onSubmit = event => {
		event.preventDefault();
		
	};

	return (
		<div>
			<Grid>
				<Row>
				<button><img src={".../utils/assets/images/clickablePawTransparent.png"} onSubmit={this.submit}/></button>
				</Row>
			</Grid>
		</div>
	);
};

export default Logo;

