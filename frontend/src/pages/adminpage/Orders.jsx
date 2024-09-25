import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { getOrders } from '../../actions/RentalAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./order.css"

const Orders = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {orders} = useSelector((state)=> state.GetOrder)
    const {adminData, loading, error} = useSelector((state)=>state.adminlogin)

    useEffect(()=>{

        if(!adminData){
          navigate('/adminlogin')
        }
      },[adminData, navigate])

    console.log("ordersfjlsfjlsfjsldfj,", orders)

    useEffect(()=>{
        dispatch(getOrders())
    },[])
  return (
    <AdminContainer>
    
    <div className="order-list">
      <h1>orders</h1>

      {orders && orders.map((order)=>(
        <div key={order._id}>
            <p>bike: {order.bike}</p>
            <p>bike: {order.user}</p>
            <p>bike: {order.totalprice}</p>
            <p>bike: {order.payment}</p>
             </div>
      ))}
    </div>
    </AdminContainer>
    
  )
}

export default Orders
