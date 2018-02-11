const wrapper=(coords)=>{
    let success=(pos)=> {
    	console.log(pos);
        coords= pos.coords;
        return coords;
    };
    const err = err => {
        console.log(err);
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 5000
    };

    navigator.geolocation.getCurrentPosition(success,err,options);
}
	
module.exports= wrapper();
