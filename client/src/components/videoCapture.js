import React from 'react';
import Webcam from 'react-webcam';
 
class Video extends React.Component {
  render() {
    return <Webcam/>;

let promise = navigator.mediaDevices.getUserMedia(constraints);

constraints = MediaDevices.getSupportedConstraints()
console.log (constraints);
  }
}


export default Video ;