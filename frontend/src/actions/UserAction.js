import axios from "axios";
import { REGISTER_USER_FAIL,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,
    LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,  GET_CURRENT_USER_FAIL,
     GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS,USER_LOGOUT
 } from "../constants/userConstants";

export const UserRegister = (name, email, password, address, contact)=> async(dispatch)=>{

    dispatch({type:REGISTER_USER_REQUEST})

    try{
        const {data} = await axios.post('/api/v1/user/register', {email, name, password, address,contact})
        dispatch({type:REGISTER_USER_SUCCESS, payload:data.data})
        console.log("user", data)

    }catch(error){
        console.log("error", error)
        dispatch({type: REGISTER_USER_FAIL, payload:error.response && error.response?.data.message ?
           error.response?.data.message : error.message})

    }

}


export const UserLogin = (email, password)=> async(dispatch)=>{
    dispatch({type:LOGIN_USER_REQUEST})

    try{
        const {data} = await axios.post('/api/v1/user/login', {email, password})
        dispatch({type:LOGIN_USER_SUCCESS, payload:data.data})
        console.log("user", data)

    }catch(error){
        console.log("error", error)
        dispatch({type: LOGIN_USER_FAIL, payload:error.response && error.response?.data.message ?
           error.response?.data.message : error.message})
    }
}


export const getCurrentUser = ()=>async(dispatch)=>{
    dispatch({type: GET_CURRENT_USER_REQUEST})

    try{
        const {data} = await api.get('/api/v1/user/user')
        dispatch({type: GET_CURRENT_USER_SUCCESS, payload:data.data})
        console.log("userdatahahah", data)
    }catch(error){
        dispatch({type:GET_CURRENT_USER_FAIL, payload:error.response && error.response.data.message? error.response.data.message : error.message})
    }
}


export const logout = ()=> (dispatch)=>{

    localStorage.removeItem('userInfo')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    
    dispatch({type:USER_LOGOUT})
    document.location.href ='/login';
}
