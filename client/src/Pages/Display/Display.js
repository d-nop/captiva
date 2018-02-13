import React, { Component } from 'react';
import API from '../../utils/API/';
import { Link } from 'react-router-dom';

class Images extends Component {
    state = {
        image: []
    }

    componentWillMount= () => {
        console.log("mounting");
        this.loadImages();
    }

    loadImages = () => {
        if(navigator.geolocation) {
            let position = navigator.geolocation.getCurrentPosition(this.showPosition,options);
            const options = {
          enableHighAccuracy:true,
          timeout: 5000,
        }
        }
        else {
            alert("Sorry! This feature is not supported for your device");
        }
    }
    showPosition = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        const loc = {
                        lat:position.coords.latitude,
                        long:position.coords.longitude
                    }
        console.log(loc);
        API.getImages(loc)
            .then (res =>{
                console.log(res)
                this.setState({ image: res.data })
            })
            .catch(err => console.log(err))
        }



// navigator.geolocation.getCurrentPosition(success, error, options);
//         const success=coords=>{
//         console.log(coords);                              
//         const loc = coords;      

//         console.log(loc);
//         // API.getImages(loc)
//         //     .then (res =>{
//         //         console.log(res)
//         //         this.setState({ image: res.data })
//         //     })
//         //     .catch(err => console.log(err))
//         // }
//         const err = err=>{
//           console.log(err);
//         };
//         const options = {
//           enableHighAccuracy:true,
//           timeout: 5000,
//         }
//         navigator.geolocation.getCurrentPosition(success,err,options);


render() {
    return (
        <div className= "container">
            <div className= "row">
                <div className= "col-xs-12">
                {this.state.image.length ? (
                    <list>
                    {this.state.image.map(image =>
                        
                        <img src= {image} alt="image"/>
                        
                    )}
                    </list>
                    ):(
                         <h3>No Results to Display</h3>
               )}
                </div>
            </div>
        </div>
)
}
}
export default Images;

