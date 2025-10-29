import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to Taskify
          </h1>
          <p className="text-gray-600">
            Your ultimate task management solution
          </p>
        </div>

        {/* User Info Section */}
        {isLoggedIn && user ? (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Welcome back, {user.username}! 👋
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                Role: {user.role.toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Get Started with Taskify
            </h2>
            <p className="text-gray-600 mb-4">
              Join thousands of users managing their tasks efficiently
            </p>
          </div>
        )}

        {/* Dashboard Link or Login/Register */}
        <div className="space-y-4">
          {isLoggedIn ? (
            <Link
              to={user?.role === 'admin' ? '/admindashboard' : '/dashboard'}
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Go to Dashboard →
            </Link>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        {!isLoggedIn && (
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-sm text-gray-600">Create Tasks</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">👥</div>
              <p className="text-sm text-gray-600">Assign Users</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-sm text-gray-600">Track Progress</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;