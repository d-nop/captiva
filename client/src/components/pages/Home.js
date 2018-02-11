import React from "react"
import {Navbar,Grid,Col,Row} from "react-bootstrap";
import Logo from "../Logo.js";
import Nav from "../Nav.js";
import Register from "../Register.js";

// import Login from "./Login.js";
// import{Logo} from"./Logo.js";

const Home = ( props ) => {
  return (
  <div>
	<Grid>
		<Row>
			<Col xs={12}>
				<Register/>
			</Col>
		</Row>
	</Grid>	
	</div>
  
 	);
}; 

export default Home


