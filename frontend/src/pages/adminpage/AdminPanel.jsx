import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import './adminpane.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()

  const {adminData, loading, error} = useSelector((state)=>state.adminlogin)

  useEffect(()=>{

    if(!adminData){
      navigate('/adminlogin')
    }
  },[adminData, navigate])

  // useEffect(()=>{

  //   if(!adminData){
  //     navigate('/adminlogin')
  //   }
  // },[useSelector,navigate])
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
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mountain Bike</td>
                <td>Off-road</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Electric Bike</td>
                <td>Electric</td>
                <td>Rented</td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
      
    </div>
    </AdminContainer>
  )
}

export default AdminPanel

