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



class Capture extends Component {
  render() {
    return (
            <div className ="container Background">
             <div className ="row">
              <div className ="col-xs-12">
              <WebCapture />
            </div>
            </div>
            <div className ="row mediaButtons">
                <div className ="col-xs-6">
                    <img src={MyMedia} id="MyMedia"alt="myMedia Icon" onClick={this.capture} My Media/>
                </div>
                <div className ="col-xs-6" >
                <img src={GeoTagged} id="GeotaggedMedia" alt= "geotagged Media" OnClick={this.capture}
               Geotagged Media/>
      
                </div>
              </div>
  </div>
    )}
};
export default Capture;