import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { getBikeReducer,BikeDetailReducer } from '../reducers/BikeReducer'
import { registerUserReducer, LoginUserReducer, getCurrenUserReducer ,DisplayUserReducer} from '../reducers/UserReducer'
import { adminLoginReducer,BikeDeleteReducer,AddBikeReducer,editBikeReducer } from '../reducers/AdminReducer'
import { AddRentalReducer } from '../reducers/RentalReducer'


const rootReducer = combineReducers({

    getBike:getBikeReducer,
    bikedetail:BikeDetailReducer,

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