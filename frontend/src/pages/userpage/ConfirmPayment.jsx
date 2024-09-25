import React from 'react'
import UserContainer from '../../component/container/UserContainer'

const ConfirmPayment = () => {

    const totalPrice = 10
    const uuid= "sdkfjlsjflsd"
    const signature = "asfjslkf"
  return (
    <UserContainer>
    <div>
        <h1>confirm payment</h1>

        <div>
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
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
 </form>

        </div>
      
    </div>
    </UserContainer>
  )
}

export default ConfirmPayment
