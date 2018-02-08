import React from 'react';
import Webcam from 'react-webcam';
import Locator from '../GeoLocated';
import $ from 'jquery';

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
      debugger;
     const newMedia = {
      imgString:imageSrc,
      lat: coords.latitude,
      long: coords.longitude,
      timestamp: timestamp
    };
      console.log(newMedia);
      $.post("/api/media", newMedia, function (res){
        console.log(res);

      })
 //  // fetch('/api/media', {
 //  //       method: 'POST',
 //  //       headers: {
 //  //          'Accept': 'application/json',
 //  //          'Content-Type': 'application/json',
 //  //           },

 //  //       body: newMedia

 // })


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