import React from 'react'
import SingleComponent from './SingleComponent'

const AllBikeLIst = ({bikes,handleRent}) => {


      
  return (
    <div className='all-bike-container'>

       {bikes &&  bikes.map((bike, index)=>(
            <SingleComponent key={index} bike={bike} handleRent={handleRent}/>
        ))}
      
    </div>
  )
}

export default AllBikeLIst
