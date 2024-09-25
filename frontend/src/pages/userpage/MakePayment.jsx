import React, { useEffect, useState } from 'react'
import UserContainer from '../../component/container/UserContainer'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Bikedetail } from '../../actions/BIkeAction'
import { AddRental } from '../../actions/RentalAction'

const MakePayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const {singlebike} = useSelector((state)=>state.bikedetail)

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const {rental} = useSelector((state)=>state.addrental)

    
    const uuid = singlebike && singlebike?.uuid
    const signature = singlebike && singlebike?.hashInBase64

    console.log("otal" ,uuid,signature)

    console.log("singlebike",singlebike)

    useEffect(()=>{
        dispatch(Bikedetail(id))
    },[dispatch,id])


    const calculatePrice = () => {
        if (fromDate && toDate && singlebike?.fooditem?.price) {
            const from = new Date(fromDate);
            const to = new Date(toDate);
            const days = (to - from) / (1000 * 60 * 60 * 24);
            const total = days * singlebike?.fooditem?.price;  // Accessing price from fooditem
            setTotalPrice(total > 0 ? total : 0); 
        }
    };

    useEffect(() => {
        calculatePrice();
    }, [fromDate, toDate, singlebike]);

    useEffect(()=>{
            if(rental){
                navigate(`confirm/${rental._id}`)
            }
    },[rental,navigate])
    const handleRental = () => {
        if (totalPrice <= 0) {
            alert("Total price must be greater than 0 to proceed.");
            // Optionally, show an error message to the user
            return;
        }
    
        // Proceed with rental if validation passes
        dispatch(AddRental(id, totalPrice));
        console.log("Total Price: Rs", totalPrice);
        
    };

   

  return (
    <UserContainer>
    <div className="receipt-container">
        <h1>Rent Bike</h1>

        <div className="payment-bike-info">
            <div className="bike-img">
                <img src={singlebike && singlebike?.fooditem?.image} alt="bike image" />
            </div>
            <div className="bike-desc">
                <p>name: {singlebike && singlebike?.fooditem?.name}</p>
                <p>serial number: {singlebike && singlebike?.fooditem?.serialNumber}</p>
                <p>description: {singlebike && singlebike?.fooditem?.description}</p>
                <p>price: {singlebike && singlebike?.fooditem?.price}</p>
                <p>bike type: {singlebike && singlebike?.fooditem?.bikeType}</p>
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
                    <button onClick={handleRental}>Make Payment</button>
                </div>
      

             
 {/* <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
 <input type="text" id="amount" name="amount" value={totalPrice} required/>
 <input type="text" id="tax_amount" name="tax_amount" value ="0" required/>
 <input type="text" id="total_amount" name="total_amount" value={totalPrice} required/>
 <input type="text" id="transaction_uuid" name="transaction_uuid" value={uuid} required/>
 <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required/>
 <input type="text" id="product_service_charge" name="product_service_charge" value="0" required/>
 <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
 <input type="text" id="success_url" name="success_url" value="https://esewa.com.np" required/>
 <input type="text" id="failure_url" name="failure_url" value="https://google.com" required/>
 <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
 <input type="text" id="signature" name="signature" value={signature} required/>
 <button type="submit">make payment</button>
 </form> */}

 
    </div>

    </UserContainer>
)
}

export default MakePayment
