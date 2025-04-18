import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Home from '@/pages/Home';
import UserProfile from '@/pages/UserProfile';
import Recipes from '@/pages/Recipes';
import PrivateRoute from '@/components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* default root route redirects to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected routes */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/recipes" element={<PrivateRoute><Recipes /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

      {/* catch-all for 404s */}
      <Route path="*" element={<h2>404 Error - Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;