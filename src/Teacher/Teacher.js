import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import CreateCourse from './CreateCourse';
import { Home } from './Home';
import Signup from './Signup';
import Login from './Login';
import { Courses } from './Courses';
import { InitCourse } from './InitCourse';
import { CourseUpdate } from './CourseUpdate';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default function Teacher() {
  return (
    <div>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            e-tutor modo profesor
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            component={Link}
            to="/teacher/courses"
          >
            Cursos
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/courses/add" element={<CreateCourse />} />
          <Route path="/courses/init" element={<InitCourse />} />
          <Route path="/courses/:id/manage/*" element={<CourseUpdate />} />
        </Routes>
      </Box>
    </div>
  );
}
