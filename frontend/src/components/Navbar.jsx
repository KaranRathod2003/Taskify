import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../context/AuthContext';
import Button from './Button';

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  
  const handlelogout = () => {
    logout();
  };

  return (
    <nav className="w-full h-16 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto h-full px-6">
        <ul className="flex items-center justify-between h-full">
          {/* Left - Brand */}
          <li className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              Welcome to Taskify ✨
            </span>
          </li>

          {/* Right - Navigation */}
          <div className="flex items-center gap-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
              >
                Home
              </Link>
            </li>

            {!isLoggedIn && (
              <>
                <li>
                  <Link 
                    to="/login" 
                    className="text-white hover:text-gray-200 font-medium transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    className="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
                {/* User Info */}
                <li className="text-white font-medium">
                  Hi, {user?.username} ({user?.role})
                </li>

                {/* Dashboard Link */}
                <li>
                  {user?.role === 'admin' ? (
                    <Link 
                      to="/admindashboard" 
                      className="text-white hover:text-gray-200 font-medium transition-colors"
                    >
                      Admin Dashboard
                    </Link>
                  ) : (
                    <Link 
                      to="/dashboard" 
                      className="text-white hover:text-gray-200 font-medium transition-colors"
                    >
                      Dashboard
                    </Link>
                  )}
                </li>

                {/* Logout Button */}
                <li>
                  <Button 
                    title="Logout" 
                    onClick={handlelogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  />
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;