import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import Capturevideo from './PawLogo2.png';
import MyMedia from './myMedia.png';
import GeoTagged from './GeoTaggedIcon.png';


class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
  capture = () => {
    let posit;

    let success=coords=>{
      console.log(coords);                              
     const newMedia = {
      imgString:imageSrc,
      loc:coords
    };
    console.log(newMedia);
  
    };

    let err = err=>{
      console.log(err);
    };

    let options = {
      enableHighAccuracy:true,
      timeout: 10000,

    };

    const imageSrc = this.webcam.getScreenshot();
    navigator.geolocation.getCurrentPosition(success,err,options);
    
   
  };

   onClick = event => {
    event.preventDefault();
    console.log("works fine");
  };

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


