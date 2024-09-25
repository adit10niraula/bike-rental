import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const UserSchema = new Schema({

    name: {
        type:String,
        required:true,
        trim: true,

    },
    email: {
        type:String,
        required:true,
        trim: true,
        unique:true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],

    },
    password: {
        type:String,
        required:true,
        

    },
    address: {
        type:String,
        required:true,
        trim: true,

    },
    contact: {
        type:Number,
        required:true,
        validate:{
            validator: function(v) {
                return /\d{10}/.test(v);             }
        },
        message: props  => `${props.value} is not a valid contact number`
        },

    refreshToken:{
        type:String
    }

},{timestamps:true})


UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        console.log("error occur in bcrypting password")
        next(error)
        
    }
    
})

UserSchema.methods.comparePassword = async function(password) {

    const match = await bcrypt.compare(password, this.password)
    if(!match){
        console.log("password doesnot match with hash value")
    }
    return match

    
}

UserSchema.methods.accessTokenGenerator = async function() {
    try {
        const token = await jwt.sign(
            { _id: this._id, name: this.name, email: this.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
        );
        return token;
    } catch (error) {
        console.error("Error occurred while generating access token:", error);
        throw new Error('Token generation failed');
    }
};

UserSchema.methods.refreshTokenGenerator = async function() {
    try {
        const token = await jwt.sign(
            { _id: this._id },
            process.env.REFRESH_TOKEN_SECRET,  
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
        );
        return token;
    } catch (error) {
        console.error("Error occurred while generating refresh token:", error);
        throw new Error('Token generation failed');
    }
};

export const User = mongoose.model("User", UserSchema)