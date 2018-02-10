import React from 'react';
import Webcam from 'react-webcam';
import Locator from '../GeoLocated';
// console.log(Locator);

//console.log(position);


class WebCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
  capture = function() {
    let coords;
    const imageSrc = this.webcam.getScreenshot();
    let position = navigator.geolocation.getCurrentPosition(function(coords){
    coords = coords;
   });
  

    const newMedia = {
      imgString:imageSrc,
      loc:coords
    }};
    // $.post("/api/media", newMedia function (res){
    //   // grab from data

    // });


 
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