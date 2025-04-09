import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth'; 

const PrivateRoute = ({ children }) => {
  // console.log(isAuthenticated())
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;  // redirect to login if the user is not authenticated
  }

  return children;  
};

export default PrivateRoute;