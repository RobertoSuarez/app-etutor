import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';
import Teacher from './Teacher/Teacher';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Login from './components/Login';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/*" element={<App />} />
            <Route path="/teacher/*" element={<Teacher />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
