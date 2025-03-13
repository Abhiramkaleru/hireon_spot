// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Unauthorized from './Components/pages/Unauthorized';
import EmployerDashboard from './Components/pages/Empolyer';
import AdminDashboard from './Components/pages/AdminDashBoard';
import JobSeekerDashboard from './Components/pages/Jobseeker'
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
       {/* Protected routes */}
       {/* Only jobseeker and guest can access their dashboard */}
       <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['job_seeker', 'guest']}>
            <JobSeekerDashboard/>
          </ProtectedRoute>
        }
      />

      {/* Only employers can access their dashboard */}
      <Route
        path="/employer-dashboard"
        element={
          <ProtectedRoute allowedRoles={['employer']}>
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Only admin users can access admin dashboard */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
