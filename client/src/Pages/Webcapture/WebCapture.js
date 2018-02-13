import React from 'react';
import $ from "jquery";
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import axios from "axios";

// console.log(Locator);

//console.log(position);

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
   
  }

  
   
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
 
render() {
return (
 <div>
  <Grid>
     <Row style={{ borderColor: "white", borderWidth: 6 }}>
     <Col xs={12}>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={400}
        />
        <button id="myMedia" onClick={this.getMine}>
        My footprint
        </button>
        <button id="captureVideo" onClick={this.capture}>
        Capture photo
        </button>
        <button id="locMedia" onClick={this.getLocal}>
        Local Footprints
        </button>
        </Col>
    </Row>
  </Grid>
</div>
    );  
  }
}

export default WebCapture;