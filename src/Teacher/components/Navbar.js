import { Link } from 'react-router-dom';

import React from 'react';

export const Navbar = () => {
  const IsLogged = localStorage.getItem('IsLogged');
  function CheckUser() {
    if (IsLogged == 'true') {
      return true;
    }
  }

  function LogOut() {
    localStorage.clear();
    window.location.reload(true);
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">e-Learn</h1>
      </Link>
      <ul className="nav-link">
        <li>
          <Link to="/teacher">Inicio</Link>
        </li>
        <li>
          <Link to="/">Estudiante</Link>
        </li>

        {CheckUser() ? (
          <>
            <li>
              <Link to="/teacher/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/teacher/courses/add">Agregar curso</Link>
            </li>
            <li onClick={LogOut} className="pointer">
              Cerrar sesión
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/teacher/login">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/teacher/signup">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
