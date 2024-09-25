import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { GetBike } from '../../actions/BIkeAction'
import { useDispatch,useSelector } from 'react-redux'
import './adminpane.css'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {bikes} = useSelector((state)=> state.getBike)

  const {adminData, loading, error} = useSelector((state)=>state.adminlogin)

  useEffect(()=>{

    if(!adminData){
      navigate('/adminlogin')
    }
  },[adminData, navigate])

  useEffect(()=>{
    dispatch(GetBike())

  },[])

  return (
    <AdminContainer>
    <div className='admin-panel-cont'>
        <h1>Dashboard</h1>

        <div className="admin-panel-continer">
            <div className="admin-panal-card">
            <h2>Rentals</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Bike</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Mountain Bike</td>
                  <td>01/10/2024</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Road Bike</td>
                  <td>02/10/2024</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
            </div>

                
        <div className="admin-panal-card">
        <h2>Bikes</h2>
            <table className="admin-table">
            <thead>
              <tr>
                <th>Bike</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
      {bikes && bikes.map((bike, index) => (
        <tr key={index}>
          <td>{bike?.name}</td>
          <td>{bike?.bikeType}</td>
          <td>${bike?.price}</td>
        </tr>
      ))}
    </tbody>
          </table>
            </div>
        </div>
      
    </div>
    </AdminContainer>
  )
}

export default AdminPanel

