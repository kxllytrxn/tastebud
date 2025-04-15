import React from 'react'
import AppRoutes from '@/AppRoutes'
import Navbar from '@/components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation()
  const hideNavbarRoutes = ['/login', '/signup']
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
  
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <AppRoutes />
    </>
  )
}

export default App