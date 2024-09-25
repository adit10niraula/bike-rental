import mongoose, {Schema} from "mongoose";
import { Bike } from "./bike.model.js";
import { User } from "./user.model.js";


const rentSchema = new Schema({
    
    bike: {
        type:Schema.Types.ObjectId,
        ref:Bike
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:User
    },
   totalprice :{
    type:String,

   },
   payment:{
    type:String,
    default:"pending"
   }
}) 


export const Rent = mongoose.model("Rent",rentSchema )