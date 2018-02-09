import React from 'react';
import Webcam from 'react-webcam';
import Locator from '../geoLocated';
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
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default WebCapture;