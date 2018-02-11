import React from "react";
import { Navbar, Grid, Row, Col } from "react-bootstrap";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";
import Multimedia from "../Multimedia/WebCapture";


const Photo = props => {

return (
  <div>
	<Grid>
    	<Row className="WebCapture">
    <Col xs={12}>
    	<Multimedia/>
    </Col>
    </Row>
    </Grid>
</div>
	)
};

export default Photo;
