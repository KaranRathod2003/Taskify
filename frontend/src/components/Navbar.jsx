import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../context/AuthContext'
import Button  from './Button'

const Navbar = () => {
    const {isLoggedIn, user, logout} = useAuth();
      const handlelogout = () => {
    logout();  // context se logout call kar
  };
    return (
        <nav className='max-w-screen h-16 bg-gray-300'>
            <ul className='flex items-center justify-center gap-12 h-full'>
                <li><Link to="/">Home</Link></li>
                {!isLoggedIn && (          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>)}
          {
            isLoggedIn && (
                <>
                <li><Link to="/dashboard">User Dashboard</Link></li>
                {user?.role === "admin" && (<li><Link to="/admindashboard">Admin Dashboard</Link></li>)}
                <Button title={'LogOut'} onClick={handlelogout} />
                </>
            )
          }
                

            </ul>
        </nav>
    )
}

export default Navbar
