import React, { useEffect } from 'react'
import UserContainer from '../../component/container/UserContainer'
import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GetBike } from '../../actions/BIkeAction'
import { Bikedetail } from '../../actions/BIkeAction'
import { useNavigate } from 'react-router-dom'
import "./bike.css"

const Bikes = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {bikes} = useSelector((state)=> state.getBike)
  
    useEffect(()=>{
      dispatch(GetBike())
  
    },[])
  
    const handleRent = (id)=>{
      navigate(`/payment/${id}`)
    }
  return (
    <UserContainer>
      <div className='all-bike'>
      <h2>All bikes</h2>
      </div>
    <div>
        
    <AllBikeLIst bikes = {bikes} handleRent={handleRent}/>
    </div>
    </UserContainer>
  )
}

export default Bikes
