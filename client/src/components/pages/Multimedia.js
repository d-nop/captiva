import React from "react";
import { Navbar, Grid, Row, Col } from "react-bootstrap";
import Logo from "../Logo.js";
import Nav from "../Nav.js";
import WebCapture from "../multi-media/WebCapture";


const Multimedia = props => {

return (
  <div>
	<Grid>
    	<Row className="WebCapture">
    <Col xs={12}>
    	<WebCapture/>
    </Col>
    </Row>
    </Grid>
</div>
	)
};

export default Multimedia;
