import React, { Component } from 'react';
import API from '../../utils/API/';
import { Link } from 'react-router-dom';
import Lightbox from 'react-images';
import axios from "axios";


class Images extends Component {
    state = {
        image: []
    }

    componentWillMount= () => {
        console.log("mounting");
        this.getLoc();

    }

    getLoc=()=>{
    console.log("hit");

    const success=banana=>{
    console.log(banana.coords);                              
    const newMedia = {
      loc:{lat: banana.coords.latitude, lng: banana.coords.longitude, timestamp:banana.timestamp} ,
      token:localStorage.getItem("user")
    };
    console.log(newMedia);
    
    axios.post("/api/loc/media", newMedia)
        .then(res=>{
            // console.log(res.data);
            // this.setState(image:{res.data.map(x=>{src:x})});
            // console.log(this.state.image);
            // this.state.image={srcSet:res.data};
            const lighboxSet = {srcSet:res.data}

            //  this.state.image.push({src:res.data.url})
            // console.log(this.state.image);
        })
        .catch(err=>{
            console.log(err);
            return err;
        })
      }
      
    

    const err = err=>{
      console.log(err);
    };

    const options = {
      enableHighAccuracy:true,
      timeout: 5000,

    };

    navigator.geolocation.getCurrentPosition(success,err,options);
  }


   
    // showPosition = (position) => {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //     const loc = {
    //                     lat:position.coords.latitude,
    //                     long:position.coords.longitude
    //                 }
    //     console.log(loc);
    //     API.getImages(loc)
    //         .then (res =>{
    //             console.log(res)
    //             this.setState({ image: res.data })
    //         })
    //         .catch(err => console.log(err))
    //    }




render() {
    return (
        <div className= "container">
            <div className= "row">
                <div className= "col-xs-12">
                {console.log(this.state.image.length)}
                {this.state.image.length ? (
                   <Lightbox
                   images={this.state.image}
                   isOpen={this.state.lightboxIsOpen}
                   onClickPrev={this.gotoPrevLightboxImage}
                   onClickNext={this.gotoNextLightboxImage}
                   onClose={this.closeLightbox}
                />
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

