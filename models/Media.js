// import { Double } from "../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaSchema = new Schema({
    url: {
        type: String
    },
   
    lat: {
        type: String
    },
    long: {
        type: String
    },
    timestamp: {
        type: Number,
        default: Date.now
    },
});

const Media = mongoose.model("Media", MediaSchema);
module.exports = Media;