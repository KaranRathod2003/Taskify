import React from 'react'
import useAuth from '../context/AuthContext'
import {Navigate, useLocation} from 'react-router-dom';

const ProtectedRotes = ({children}) => {
  const {isAuthLoading, isLoggedIn} = useAuth();
  const location = useLocation();
  if(isAuthLoading){
    return <div className="text-center mt-10 text-lg">Checking authentication...</div>;
  }
  if(!isLoggedIn){
    return <Navigate to={'/login'} state={{from: location}} replace />
  }
  return children;

}

export default ProtectedRotes