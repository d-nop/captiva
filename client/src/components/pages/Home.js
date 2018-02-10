import React from "react"
import {Navbar} from "react-bootstrap";
import Logo from "../Logo.js";
import Nav from "../Nav.js";
import Register from "../Register.js";

// import Login from "./Login.js";
// import{Logo} from"./Logo.js";

const Home = ( props ) => {
  return (
  <div>
  		
  		<section>
 			<Logo />
  		</section>

		<section>
		<Register/>
		</section>
		
 		
	</div>
  
 	);
}; 

export default Home


