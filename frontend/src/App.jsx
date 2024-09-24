import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/userpage/home'
import AdminPanel from './pages/adminpage/AdminPanel'
import AdminBikes from './pages/adminpage/AdminBikes'
import Login from './pages/userpage/Login'
import Register from './pages/userpage/Register'
import AdminLogin from './pages/adminpage/AdminLogin'
import AddBike from './pages/adminpage/AddBike'
import EditBike from './pages/adminpage/EditBike'
import DeleteBike from './pages/adminpage/DeleteBike'
import Users from './pages/adminpage/Users'
import MakePayment from './pages/userpage/MakePayment'
import AboutUs from './pages/userpage/AboutUs'
import ContactUs from './pages/userpage/ContactUs'
import Bikes from './pages/userpage/Bikes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/bikes" element={<Bikes/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>


        <Route path="/payment/:id" element={<MakePayment/>}/>


        <Route path="/admin" element= {<AdminPanel/>}/>
        <Route path="/adminlogin" element= {<AdminLogin/>}/>
        <Route path="/admin/bikes" element= {<AdminBikes/>}/>
        <Route path="/admin/add" element= {<AddBike/>}/>
        <Route path="/admin/user" element= {<Users/>}/>
        <Route path="/admin/edit/:id" element= {<EditBike/>}/>
        <Route path="/admin/delete/:id" element= {<DeleteBike/>}/>

      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
