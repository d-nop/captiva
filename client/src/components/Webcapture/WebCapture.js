import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Webcam from 'react-webcam';
import Locator from '../GeoLocated/geoLocated.js';
// console.log(Locator);

//console.log(position);

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
    // $.post("/api/media", newMedia function (res){
    //   // grab from data

    // });  
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
        <button id="captureVideo" onClick={this.capture}>
        Capture photo
        </button>
        </Col>
    </Row>
  </Grid>
</div>
    );  
  }
}

export default WebCapture;