import React from 'react';
import $ from "jquery";
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import axios from "axios";
import PawLogo from "../../utils/assets/images/PawLogo.png";
import Capturevideo from './dogPaw.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';

 const styles ={
      background:{
        background:"#24047C",
        backgroundImage:require("../../utils/assets/images/PawLogo.png")
      },
      logo:{
        width:"30%",
        height:"30%",
        float:"right"
      }
    }

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
 <div className= "MediaCapture" style={styles.background}>
   <Row center="xs">
     <Col xs={12} md={6}>
        <Webcam
          id="webcam"
          audio={false}
          height={"41%"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={"51%"}
        />
        <img src={PawLogo} id="CapLogo" style= {styles.logo}/>
        </Col>
        </Row>
        <Row center="xs">
        <Col xs={12} md={6}>
          <div className ="row mediaButtons">
                <button className ="col-xs-4">
                    <img src={MyMedia} id="MyMedia"alt="Your Footprints" onClick={this.getMine} />
                </button>
                <button className ="col-xs-4" id="buttonCapture">
                  <img src = {Capturevideo} onClick={this.capture} alt ="Add your footprint"/>
                </button>
                <button className ="col-xs-4" >
                  <img src={GeoTagged} id="GeotaggedMedia" alt= "Local Footprints" onClick={this.getLoc} />
                </button>
            </div>
        </Col>
    </Row>
</div>
    );  
  }
}

export default WebCapture;

