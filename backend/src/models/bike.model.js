import mongoose, {Schema} from "mongoose";
import { Location } from "./location.model.js";

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bikeType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    } ,

    image: {
        type: String,
    }
});



export const Bike = mongoose.model('Bike', bikeSchema);


