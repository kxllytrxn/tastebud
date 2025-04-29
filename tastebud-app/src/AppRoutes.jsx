import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Home from '@/pages/Home';
import UserProfile from '@/pages/UserProfile';
import Recipes from '@/pages/Recipes';
import RecipePage from '@/pages/RecipePage';
import PrivateRoute from '@/components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* default root route redirects to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected routes - login */}
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/recipes" element={<PrivateRoute><Recipes /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      
      {/* recipe pages */}
      <Route path="/recipe/:id" element={<PrivateRoute><RecipePage /></PrivateRoute>} />

      {/* catch-all for 404s */}
      <Route path="*" element={<h2> Page under-construction </h2>} />
    </Routes>
  );
};

export default AppRoutes;