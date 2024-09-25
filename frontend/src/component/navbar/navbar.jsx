import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { logout } from '../../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const { loginuser } = useSelector((state) => state.loginuser);  // Logged-in status
  const { user } = useSelector((state) => state.getcurrentuser);  // User data

  // Log user data to check if it's being fetched correctly
  useEffect(() => {
    console.log("loginuser:", loginuser);
    console.log("user:", user);
  }, [loginuser, user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='user-navbar'>
      <div className="nav-logo">
        <h1>Bike Rental</h1>
      </div>
      <div className="nav-page-link">
        <p><Link className='link' to="/">Home</Link></p>
        <p><Link className='link' to="/bikes">Bikes</Link></p>
        <p><Link className='link' to="/about">About Us</Link></p>
        <p><Link className='link' to="/contact">Contact Us</Link></p>
      </div>
      <div className='nav-login'>
        {loginuser && user ? (
          <>
            <p className="user-name">Welcome, {user.name ? user.name : 'User'}</p>
            <p onClick={handleLogout}><Link className='link'>Logout</Link></p>
          </>
        ) : (
          <>
            <p><Link className='link' to="/login">Login</Link></p>
            <p><Link className='link' to="/logout">Logout</Link></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
