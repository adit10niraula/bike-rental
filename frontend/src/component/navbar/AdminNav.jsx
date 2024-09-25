import React from 'react'
import { Link } from 'react-router-dom'
import './adminnav.css'
import { adminLogout } from '../../actions/AdminAction'
import { useDispatch } from 'react-redux'



const AdminNav = () => {
  const dispatch = useDispatch()
  const handlelogout= ()=>{
    dispatch(adminLogout())
    
  }
  return (
    <div className='admin-navbar'>
    <div className="admin-nav-logo">
        <h1>Bike Rental</h1>
    </div>
    <div className="admin-nav-page-link">
        <p><Link className='link' to="/admin">Dashboard</Link></p>
        <p><Link className='link' to="/admin/bikes">BIkes</Link></p>
        <p><Link className='link' to="/admin/user">Users</Link></p>
        <p><Link className='link' to="/admin/add">Add bikes</Link></p>


        <p className='logout' onClick={()=>handlelogout()}>Logout</p>
        
        
    </div>
  
</div>
  )
}

export default AdminNav
