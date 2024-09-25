import { ADD_RENTAL_REQUEST, ADD_RENTAL_FAIL, ADD_RENTAL_SUCCESS, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../constants/RentalConstants";
import axios from "axios";
import api from "../store/Api";

export const AddRental = (bike_id,total_cost)=> async(dispatch)=>{
    dispatch({type:ADD_RENTAL_REQUEST})

    try {

        console.log("trying")
        const {data} = await api.post('/api/v1/rent/create', {bike_id,total_cost})

       
        console.log("bike rental", data)
        dispatch({type:ADD_RENTAL_SUCCESS, payload:data.data})
        
    } catch (error) {
        console.log("rental error",error)
        dispatch({type:ADD_RENTAL_FAIL, payload:error?.response && error?.response.data.message ? error.response.data.message : error.message})

    }

}



export const makepayment = ()=> async(dispatch)=>{
    dispatch({type:PAYMENT_REQUEST})

    try {

        console.log("trying")
        const {data} = await axios.get('/api/v1/rent/payment')

       
        console.log("bike rental", data)
        dispatch({type:PAYMENT_SUCCESS, payload:data.data})
        
    } catch (error) {
        console.log("rental error",error)
        dispatch({type:PAYMENT_FAIL, payload:error?.response && error?.response.data.message ? error.response.data.message : error.message})

    }

}