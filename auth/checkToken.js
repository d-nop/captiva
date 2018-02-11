module.exports= (req,res,next)=>{
	const bearerHeader = req.headers["authorisation"];
	if(bearerHeader!=="undefined"){
		console.log(bearerHeader);
		req.token = bearerHeader;
		next();
	}
	else{
		res.send("This is a protected route...login needed");
	}
};