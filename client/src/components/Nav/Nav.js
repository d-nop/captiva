import React from "react";
import {Navbar} from "react-bootstrap";
import {Form} from "react-bootstrap";
import "./Nav.css"
// import Photo from './dogPaw.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';
import Background from "./";
import PawLogo2 from './PawLogo2.png';
import Media from './myMedia.png';
import GeoImages from './GeoTaggedIcon.png';

const Nav = ( props ) => {
return ( 
  <div>
   <nav className="navbar navbar-default navbar-fixed-top" pull left>
     <div className="navbar-header">
      <a className="navbar-brand" href="Login"><img src= {PawLogo2} alt="geolocation"width="35" height="35"/></a>
      <p className="navbar-text">Captiva</p>
      
  </div>
        
  </nav>
  </div>

 )
 
 };
    
export default Nav;

