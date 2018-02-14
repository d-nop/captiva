// const wrapper=(coords)=>{
//     let success=(pos)=> {
//       console.log(pos);
//         coords= pos.coords;
//         return coords;
//     };
//     const err = err => {
//         console.log(err);
//     };

//     const options = {
//         enableHighAccuracy: true,
//         timeout: 5000
//     };

//     navigator.geolocation.getCurrentPosition(success,err,options);
// }
  
// module.exports= wrapper();

// import React from 'react';
// import {geolocated, geoPropTypes} from 'react-geolocated';
 
// class Locator extends React.Component {
//   render() {
//     return !this.props.isGeolocationAvailable
//       ? <div>Your browser does not support Geolocation</div>
//       : !this.props.isGeolocationEnabled
//         ? <div>Geolocation is not enabled</div>
//         : this.props.coords
//           ? <table>
//             <tbody>
//               <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
//               <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
//               <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
//               <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
//               <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
//             </tbody>
//           </table>
//           : <div>Getting the location data&hellip; </div>;
//   }
// }

// Locator.propTypes = {...Locator.propTypes, ...geoPropTypes};
 
// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(Locator);