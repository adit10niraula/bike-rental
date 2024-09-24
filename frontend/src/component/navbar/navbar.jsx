import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import { logout } from '../../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.getcurrentuser)

  const handlelogout= ()=>{
    dispatch(logout())
  }
  return (
    <div className='user-navbar'>
        <div className="nav-logo">
            <h1>Bike rental</h1>
        </div>
        <div className="nav-page-link">
            <p><Link className='link' to="/">Home</Link></p>
            <p><Link className='link' to="">Bikes</Link></p>
            <p><Link className='link' to="">About us</Link></p>
            <p><Link className='link' to="">Contact us</Link></p>
          
        </div>
        <div className='nav-login'>
          {user && user ? <p onClick={()=> handlelogout()}> <Link className='link' >logout</Link></p> : <><p><Link className='link' to="/login">login</Link></p>
            <p> <Link className='link' to="/register">register</Link></p> </>}
            
            
            
        </div>
      
    </div>
  )
}

export default Navbar
