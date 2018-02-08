import React from 'react';
import Webcam from 'react-webcam';
import $ from 'jquery';

// console.log(Locator);

//console.log(position);


class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
  capture = () => {


    let success=coords=>{
      console.log(coords);
      console.log('this is latitude ',coords.coords.latitude)
      for (let key in coords) {
        console.log(key)
      }
     
     const newMedia = {
      imgString:imageSrc,
      lat: coords.coords.latitude,
      long: coords.coords.longitude,
      timestamp: coords.timestamp
    };
      console.log(newMedia);
      $.post("/api/media", newMedia, function (res){
        console.log(res);

      })

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