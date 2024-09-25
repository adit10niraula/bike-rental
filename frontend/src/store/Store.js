import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { getBikeReducer,BikeDetailReducer } from '../reducers/BikeReducer'
import { registerUserReducer, LoginUserReducer, getCurrenUserReducer ,DisplayUserReducer} from '../reducers/UserReducer'
import { adminLoginReducer,BikeDeleteReducer,AddBikeReducer,editBikeReducer } from '../reducers/AdminReducer'
import { AddRentalReducer ,GetOrderReducer} from '../reducers/RentalReducer'


const rootReducer = combineReducers({

    getBike:getBikeReducer,
    bikedetail:BikeDetailReducer,
    GetOrder:GetOrderReducer,

    loginuser:LoginUserReducer,
    registeruser:registerUserReducer,
    getcurrentuser: getCurrenUserReducer,

    addrental:AddRentalReducer,


    adminlogin:adminLoginReducer,
    bikeDelete:BikeDeleteReducer,
    addBike:AddBikeReducer,
    editBike:editBikeReducer,
    displayuser:DisplayUserReducer
})


const store = configureStore({
    reducer:rootReducer
})

export default store