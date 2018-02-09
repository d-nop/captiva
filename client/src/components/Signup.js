import React from "react"
import {Navbar} from "react-bootstrap";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import Login from "./Login.js";


const Home = ( props ) => {
  return (
  <div>
  		<section>
  			<Nav/>
  		</section>

   		<section>
 			<Login />
  		</section>
</div>
  
 	);
}; 

export default Home