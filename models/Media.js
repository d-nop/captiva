import { Double } from "../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MediaSchema = new Schema({

    url: {

        type: String,
        unique: true,
        required: true

    },

    location: {

        type: Number,
        required: true

    },

    author: {

        type: Schema.Types.ObjectId,
        ref: "User"

    }


});

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media;