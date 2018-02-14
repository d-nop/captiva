import axios from "axios";

export default {
    getImages: function() {
        return axios.get("/api/loc/media");
    }


};