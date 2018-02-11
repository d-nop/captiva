import React from "react";
import {Navbar} from "react-bootstrap";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";
import Playmedia from "../Playmedia/Playmedia.js";

const Playbutton = ( props ) => {
  return (
  <div>
  		<section>
  			<Nav/>
  		</section>

  		<section>
 			<Logo />
  		</section>

		<section>
		<Playmedia/>
		</section>
		
 		
	</div>
  
 	);
}; 

export default Playbutton
