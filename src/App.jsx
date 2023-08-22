import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Compontent import
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
import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Navbar from './components/Navbar';

const drawerWidth = 325;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const App = () => {
  const { user } = useUserAuth();
  const [openDrawer, setOpenDrawer] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleDrawerOpen = () => {
    console.log('Abrir el menu de mi aplicación preciosa');
    setOpenDrawer(!openDrawer);
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* <Navbar handleDrawerOpen={handleDrawerOpen} /> */}

      <AppBar
        component="nav"
        position="fixed"
        open={openDrawer}
        color="inherit"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 1, ...(openDrawer && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Navbar handleDrawerOpen={handleDrawerOpen} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Sidebar handleDrawerOpen={handleDrawerOpen} />
      </Drawer>

      <Main open={openDrawer}>
        <Toolbar />
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
      </Main>
    </Box>
  );
};
