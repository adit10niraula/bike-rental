import React from 'react'
import AdminNav from '../navbar/AdminNav'
import Footer from '../navbar/footer'
import '../navbar/navbar.css'

const AdminContainer = ({children}) => {
  return (
    <div className='adminContainer'>

        <AdminNav/>

        <div>
        {children}

        {/* <Footer/> */}
        </div>
      
    </div>
  )
}

export default AdminContainer
