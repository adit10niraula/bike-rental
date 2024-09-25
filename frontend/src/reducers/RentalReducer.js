import { ADD_RENTAL_REQUEST, ADD_RENTAL_FAIL, ADD_RENTAL_SUCCESS } from "../constants/RentalConstants";



export const AddRentalReducer = (state={}, action)=>{
    switch(action.type){
        case ADD_RENTAL_REQUEST:
            return {loading:true}
        case ADD_RENTAL_SUCCESS:
            return {loading:false, rental:action.payload}
        case ADD_RENTAL_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}