import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <>
      <Link to="/login">Iniciar sesión</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/signup">Registrarse</Link>
    </>
  );
};

export default LoginButton;
