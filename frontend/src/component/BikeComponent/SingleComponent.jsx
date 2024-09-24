import React from 'react'
import './bikecomponent.css'

const SingleComponent = ({bike,handleRent}) => {
  return (
    <div className='single-product-componetn'>

        <div className="image">
            <img src={bike?.image} alt="product image" />

        </div>

        <div className="single-product-info">
            <p><span></span>{bike?.name}</p>
            {/* <p><span>serialNumber: </span>{bike?.serialNumber}</p>
            <p><span>description: </span>{bike?.description}</p>
            <p><span>type: </span>{bike?.bikeType}</p> */}
            <p className='price'><span>price: </span>{bike?.price}</p>
            
        </div>
        
            <button type="submit" onClick={()=>handleRent(bike?._id)} >rent bike</button>
    

        

      
    </div>
  )
}

export default SingleComponent
