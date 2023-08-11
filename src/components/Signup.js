import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/login');
    } catch (err) {
      setError(err.message);
      //console.log('Mensaje de depuración');
      //navigate('/signup');
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Registro de estudiantes</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Dirección de correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Registrarse
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </div>
    </>
  );
};

export default Signup;
