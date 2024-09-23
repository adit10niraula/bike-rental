import React from 'react'
import UserContainer from '../../component/container/UserContainer'

const MakePayment = () => {
  return (
    <UserContainer>
    <div>
        <h1>make  payment</h1>

        <div className="payment-bike-info">
            <div className="bike-img">
                <img src="" alt="bike image" />
            </div>
            <div className="bike-desc">
                <p>name</p>
                <p>serial number</p>
                <p>description</p>
                <p>price</p>
                <p>bike type</p>
            </div>
        </div>


        <div className="payment-detail">
            <div className="date-form">
                <label htmlFor="from">from</label>
                <input type="date" name="form" id="" />

                <label htmlFor="to">to</label>
                <input type="date" name="to" id="" />


                <p>total price : <span>Rs : </span></p>
            </div>

            <button>Make payment</button>
        </div>
      
    </div>

    </UserContainer>
  )
}

export default MakePayment
