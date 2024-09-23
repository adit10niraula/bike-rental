import React from 'react'
import { Link } from 'react-router-dom'
import './adminnav.css'

const AdminNav = () => {
  return (
    <div className='admin-navbar'>
    <div className="admin-nav-logo">
        <h1>Bike Rental</h1>
    </div>
    <div className="admin-nav-page-link">
        <p><Link className='link' to="">Dashboard</Link></p>
        <p><Link className='link' to="">BIkes</Link></p>
        <p><Link className='link' to="">Users</Link></p>
        <p><Link className='link' to="">Add bikes</Link></p>
        <p className='logout'>Logout</p>
        
    </div>
  
</div>
  )
}

export default AdminNav
