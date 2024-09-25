import { AsyncHandler } from "../utils/AsyncHandler.js";
import { uploadToCoudinary } from "../utils/CloudinaryUpload.js";
import { ApiError } from "../utils/ErrorHandler.js";
import { ApiResponse } from "../utils/ResponseHandler.js";
import { Bike } from "../models/bike.model.js";
import { Rent } from "../models/rental.model.js";
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js'; 

const addToCart = AsyncHandler(async(req, res)=>{
    
    const {bike_id, total_cost} = req.body

    console.log("req.bodydslfjsf", req.body)

    const user = req.user
    if(!user){
        throw new ApiError(400, "user must be logged in to add to car")
    }
    if(!bike_id){
        throw new ApiError(400,"fooditem not found")
    }
    console.log(bike_id)

    const food = await Bike.findById(bike_id)
    if(!food){
        throw new ApiError(400, "invalid bike")
    }
    console.log(food)
    
    const cartItem =  await Bike.findOne({fooditem:food._id, user:user._id})
    console.log("cart items",cartItem)
    
    const createCartItem = await Rent.create({
        bike:food._id,
            user:user._id,
            totalprice:total_cost

        })

        
    // const newcartitem =  await Bike.findById(createCartItem?._id)
    // if(!newcartitem){
    //     throw new ApiError(400, "cart item is not created")
    // }



    return res.status(200).json(new ApiResponse(200, createCartItem, "added to cart success"))
})

const makePayment = AsyncHandler(async(req, res)=>{
  
    const uuid = uuidv4()
    const fooditem = await Rent.findById()
    const message = `total_amount=${fooditem?.price},transaction_uuid=${uuid},product_code=EPAYTEST`
    const hash = CryptoJS.HmacSHA256(message, process.env.ESEWASECRET)
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash)

    console.log("uuid,",uuid ,"message", message, "hash",hash, "hashin64", hashInBase64)

   

    return res.status(200).json(new ApiResponse(200, {fooditem, uuid, message,hash, hashInBase64}, "getting single data"))



})

export {addToCart, makePayment}