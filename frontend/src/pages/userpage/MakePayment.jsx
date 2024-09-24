import React from 'react'
import UserContainer from '../../component/container/UserContainer'
//import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
import './makepay.css'

const MakePayment = () => {
return (
    <UserContainer>
    <div className="receipt-container">
        <h1>Rent Bike</h1>

        <div className="payment-bike-info">
            <div className="bike-img">
            <img src="Tvs Raider.jpg" alt="Bike" />
            </div>
            <div className="bike-desc">
            <p><strong>Name:</strong> Mountain Bike</p>
            <p><strong>Serial Number:</strong> MBX12345</p>
            <p><strong>Description:</strong> A sturdy and durable mountain bike suitable for rough terrain.</p>
            <p><strong>Price:</strong> Rs. 500/hour</p>
            <p><strong>Bike Type:</strong> Mountain</p>
            </div>
        </div>

        <div className="payment-detail">
            <div className="date-form">
            <label htmlFor="from">From</label>
            <input type="date" name="from" id="from" />

            <label htmlFor="to">To</label>
            <input type="date" name="to" id="to" />

            <p className="total-price">
                Total Price: <span>Rs. 2000</span>
            </p>
            </div>

            <button className="payment-btn">Make Payment</button>
        </div>
    </div>

    </UserContainer>
)
}

export default MakePayment
