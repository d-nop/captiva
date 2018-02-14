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
 
   capture = () => {
    const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      imgString:imageSrc,
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("user")
    };
    console.log(newMedia);

    axios.post("/api/media", newMedia, function (req,res){
      console.log(res);
      this.props.history.push("/display");
    })  

    }

    const err = err=>{
      console.log(err);
    }

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    }

    const imageSrc = this.webcam.getScreenshot();
    navigator.geolocation.getCurrentPosition(success,err,options);
  }
    
  getLoc=()=>{
   const success=banana=>{
      console.log(banana.coords);                              
     const newMedia = {
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("user")
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
  }

  getMine=()=>{
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log(username,token);
    axios.post("/api/user/"+username, token)
      .then(res=>{
        console.log(res);
        this.props.history.push("/display");
      })
  }
 

render(){
return (
 <div className= "MediaCapture">
   <Row around="xs">
     <Col xs={12}>
        <Webcam
          id="webcam"
          audio={false}
          height={"90%"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={"100%"}
        />
          <div className ="row mediaButtons">
                <button className ="col-xs-4">
                    <img src={MyMedia} id="MyMedia"alt="Your Footprints" onClick={this.getMine} />
                </button>
                <button className ="col-xs-4" id="buttonCapture">
                  <img src = {Capturevideo} onClick={this.capture} alt ="Add your footprint"/>
                </button>
                <button className ="col-xs-4" >
                  <img src={GeoTagged} id="GeotaggedMedia" alt= "Local Footprints" OnClick={this.getLoc} />
      
                </button>
            </div>
        </Col>
    </Row>
</div>
    );  
  }
}

export default WebCapture;

