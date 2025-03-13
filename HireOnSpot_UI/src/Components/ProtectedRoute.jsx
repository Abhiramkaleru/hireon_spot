// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { auth } = useContext(AuthContext);

  // If the user is not logged in, redirect to the login page.
  if (!auth.token) {
    return <Navigate to="/login" replace />;
  }

  // Only allow access if the user's role is one of the allowedRoles.
  if (!allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If all checks pass, render the protected component.
  return children;
};

export default ProtectedRoute;



