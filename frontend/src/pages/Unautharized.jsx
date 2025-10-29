import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const Unauthorized = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Icon */}
        <div className="text-6xl mb-4">🚫</div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Access Denied
        </h1>
        
        {/* Message */}
        <p className="text-gray-600 mb-6">
          {isLoggedIn
            ? `Sorry ${user?.username}, you don't have permission to access this page.`
            : 'You need to be logged in to access this page.'}
        </p>

        {/* User Info if logged in */}
        {isLoggedIn && user && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Current Role:</p>
            <p className="text-lg font-semibold text-gray-800">
              {user.role.toUpperCase()}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {isLoggedIn ? (
            <>
              <Link
                to={user?.role === 'admin' ? '/admindashboard' : '/dashboard'}
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go to Your Dashboard
              </Link>
              <Link
                to="/"
                className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Login to Continue
              </Link>
              <Link
                to="/"
                className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;