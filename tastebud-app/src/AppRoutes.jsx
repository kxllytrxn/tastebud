import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Home from '@/pages/Home';
import UserProfile from '@/pages/UserProfile';
import Recipes from '@/pages/Recipes';
import PrivateRoute from '@/components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* public default routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected routes - only for logged in users */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/recipes" element={<PrivateRoute><Recipes /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

      {/* 404 page */}
      <Route path="*" element={<h2>404 Error - Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
