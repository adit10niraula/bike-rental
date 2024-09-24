import React, { useEffect, useState } from 'react'
import UserContainer from '../../component/container/UserContainer'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Bikedetail } from '../../actions/BIkeAction'

const MakePayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const {singlebike} = useSelector((state)=>state.bikedetail)

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    console.log("singlebike",singlebike)

    useEffect(()=>{
        dispatch(Bikedetail(id))
    },[dispatch,id])


    const calculatePrice = () => {
        if (fromDate && toDate && singlebike?.price) {
            const from = new Date(fromDate);
            const to = new Date(toDate);
            const days = (to - from) / (1000 * 60 * 60 * 24);
            const total = days * singlebike.price;
            setTotalPrice(total > 0 ? total : 0); 
        }
    };

    useEffect(() => {
        calculatePrice();
    }, [fromDate, toDate, singlebike]);

    const handlePayment = () => {
     
        console.log("Total Price: Rs", totalPrice);
        
    };


  return (
    <UserContainer>
    <div>
        <h1>make  payment</h1>

        <div className="payment-bike-info">
            <div className="bike-img">
                <img src={singlebike && singlebike?.image} alt="bike image" />
            </div>
            <div className="bike-desc">
                <p>name: {singlebike && singlebike?.name}</p>
                <p>serial number: {singlebike && singlebike?.serialNumber}</p>
                <p>description: {singlebike && singlebike?.description}</p>
                <p>price: {singlebike && singlebike?.price}</p>
                <p>bike type: {singlebike && singlebike?.bikeType}</p>
            </div>
        </div>


        <div className="payment-detail">
                    <div className="date-form">
                        <label htmlFor="from">From:</label>
                        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                        <label htmlFor="to">To:</label>
                        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                        <p>Total Price: <span>Rs {totalPrice}</span></p>
                    </div>
                    <button onClick={handlePayment}>Make Payment</button>
                </div>
      
    </div>

    </UserContainer>
  )
}

export default MakePayment
