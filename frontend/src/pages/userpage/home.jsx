import React, { useEffect } from 'react'
import UserContainer from '../../component/container/UserContainer'
import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GetBike } from '../../actions/BIkeAction'
import { Bikedetail } from '../../actions/BIkeAction'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])

  const handleRent = (id)=>{
    navigate(`payment/${id}`)
  }
  return (
    <UserContainer>
    <div>
    <AllBikeLIst bikes = {bikes} handleRent={handleRent}/>
    </div>
    </UserContainer>
  )
}

export default Home
