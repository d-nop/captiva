import React from "react"
import {Navbar} from "react-bootstrap";
import Background from "../../utils/assets/images/plainBackground.jpeg";
import Nav from "../../components/Nav";
import "./WebCapture.css";
import WebCapture "./WebCapture.js"
import Nav from "../../components/Nav";


const Media = ( props ) => {
  return (
  <div className="MediaCapture">
  <img src={Background} id="Background"/>
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image src={WebCapture}circle />
      </Col>
    </Row>
  </Grid>
  </div>

 );
}; 

export default Media

 