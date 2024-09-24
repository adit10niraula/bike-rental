import React, { useEffect } from 'react'
import UserContainer from '../../component/container/UserContainer'
import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GetBike } from '../../actions/BIkeAction'
import "./home.css"

const Home = () => {

  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])
  return (
    <UserContainer>
      <div className="banner">
        <img src="img/banner.png" alt="Bike Rental Banner" className="banner-img" />
      </div>
      <div className="latest-bike">
      <h2>Latest Bike</h2>
    <AllBikeLIst bikes = {bikes}/>
    </div>
    </UserContainer>
  )
}

export default Home
