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

import React, { useEffect } from 'react';
import { useUserAuth } from './context/UserAuthContext';

export const App = () => {
  const { user } = useUserAuth();

  useEffect(() => {
    console.log('usuario: ', user);
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="app-wrap">
        <Navbar />

        <Sidebar />
        <div className="app">
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
        </div>
      </div>
    </>
  );
};
