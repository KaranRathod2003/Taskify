import React from 'react'
import useAuth from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RolesRoute  = ({ children, allowedRoles }) => {
  const { user, isLoggedIn, isAuthLoading } = useAuth();

  // Loading state handle karo (optional)
  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  // User logged in nahi hai -> login page redirect
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Role check karo
  if (user && allowedRoles.includes(user.role)) {
    return children; // allowed -> render karo jo child component hai
  } else {
    return <Navigate to="/unauthorized" replace />; // not allowed -> unauthorized page
  }
};

export default RolesRoute