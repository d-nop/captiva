import React from 'react';
import $ from "jquery";
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';

import Capturevideo from './dogPaw.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';



class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
   capture = () => {

    const success=coords=>{
      console.log(coords);                              
     const newMedia = {
      imgString:imageSrc,
      loc:coords
    };
    console.log(newMedia);

  

    $.post("/api/media", newMedia, function (req,res){
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


  }

  readCookie=(name)=> {
      const nameEQ = name + "=";
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
   
  getMine=()=>{
   
    const userToken = this.readCookie("authToken");
    console.log(userToken);
    $.ajax({
    url : "/api/user/media",
    method : 'GET',
    beforeSend : function(req) {
        req.setRequestHeader('Authorisation', userToken);
    }
});
  }
 

render() {
return (
 <div class= "MediaCapture">
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
          <button id="buttonCapture"><img src = {Capturevideo} onClick={this.Capturevideo} Capture photo/>
          </button>


        </Col>
    </Row>
</div>
    );  
  }
}

export default WebCapture;

