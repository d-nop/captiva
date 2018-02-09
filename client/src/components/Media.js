import React from "react"
import {Navbar} from "react-bootstrap";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import Mediaplayer from "./Mediaplayer.js";

// import Login from "./Login.js";
// import{Logo} from"./Logo.js";

const Media = ( props ) => {
  return (
  <div>
  		<section>
  			<Nav/>
  		</section>

  		<section>
 			<Logo />
  		</section>

		<section>
		<Mediaplayer/>
		</section>
		
 		
	</div>
  
 	);
}; 

export default Media
