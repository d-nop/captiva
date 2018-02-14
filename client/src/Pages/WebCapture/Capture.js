import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import Capturevideo from './dogPaw.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';
import "./Capture.css"
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import WebCapture from './WebCapture.js';
import Background from './plainBackground.jpg';
import Nav from '../../components/Nav/Nav.js'

class Capture extends Component {
  render() {
    return (
<div>
    <section>
        <Nav/>
    </section>
<div className ="container Background">        
<Grid>
        <Row id="WebCapture">
          <Col xs={12}>
             <WebCapture /> 
          </Col>  
        </Row>
    <Row>
        <Col xs={6}>
           <button id="MyMedia"><img src ={MyMedia} alt="My Media" onClick={this.MyMedia} GetMyMedia/></button>
        </Col>
       
        <Col xs={6}> 
          <button id="GeotaggedMedia"><img src={GeoTagged} alt="geotagged Media" onClick={this.GeoTagged} GetGeotaggedMedia/></button>
        </Col> 
    </Row> 
 </Grid>   
</div>
</div>

)
    } 

    
};
export default Capture;