import React from 'react';
import $ from "jquery";
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import axios from "axios";

import Capturevideo from './dogPaw.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';



class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }


  readCookie=()=> {
      const nameEQ = "authToken=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

 
   capture = () => {

    const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      imgString:imageSrc,
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("token")
    };
    console.log(newMedia);
    axios.post("/api/media", newMedia, function (req,res){

      console.log(res);

    });  

    };

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    };

    const imageSrc = this.webcam.getScreenshot();
    navigator.geolocation.getCurrentPosition(success,err,options);
   

  };

   onClick = event => {
    event.preventDefault();
    console.log("works fine");
  };


  

  
   
  getMine=()=>{
   const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("token")
    };
    console.log(newMedia);
    
    axios.post("/api/loc/media", newMedia, function (req,res){
      console.log(res);
      this.props.history.push("/display");
    });  
    };

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    };

    navigator.geolocation.getCurrentPosition(success,err,options);
    // const userToken = this.readCookie("authToken");
    // console.log(userToken);
    
  }
 

render(){
return (
 <div className= "MediaCapture">
   <Row around="xs">
     <Col xs={12}>
        <Webcam
          id="webcam"
          audio={false}
          height={"100%"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"

          width={"100%"}
          />
          <button id="buttonCapture"><img src = {Capturevideo} onClick={this.capture} Capture photo/>
          </button>


        </Col>
    </Row>
</div>
    );  
  }
}

export default WebCapture;

