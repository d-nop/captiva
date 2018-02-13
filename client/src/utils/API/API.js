import axios from "axios";

export default {
    getImages: function(loc) {
        return axios({
				  method:'get',
				  url:'/api/loc/media',
				  headers:loc
				})
				  .then(function(response) {
				  return response
				});
				    }


};