import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Compontent import
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Pages import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Learning from './pages/Learning';
import { Cart } from './pages/Cart';
import { Settings } from './pages/Settings';
import Login from './components/Login';
import Signup from './components/Signup';
import Course from './pages/Course';

import React from 'react';
import { useUserAuth } from './context/UserAuthContext';
import { Box, CssBaseline, Drawer } from '@mui/material';
import { useState } from 'react';

export const App = () => {
  const { user } = useUserAuth();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    console.log('Abrir el menu de mi aplicación preciosa');
    setOpenDrawer(!openDrawer);
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }} className="app-wrap">
      <CssBaseline />

      <Navbar handleDrawerOpen={handleDrawerOpen} />

      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClick={handleDrawerOpen}
      >
        <Sidebar />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/learning"
            element={
              <ProtectedRoute>
                <Learning />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/learning/:id"
            element={
              <ProtectedRoute>
                <Course />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};
