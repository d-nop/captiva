import React from "react"
import {Navbar} from "react-bootstrap";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
// import{Logo} from"./Logo.js";

const Home = ( props ) => {
  return (
  <div>
  		<section>
  			<Nav/>
  		</section>

  		<section>
 			<Logo />
  		</section>
</div>
  
 	);
}; 

export default Home