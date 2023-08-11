import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Inicio de sesión del estudiante</h2>
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
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'} // Usa el estado showPassword para cambiar el tipo de entrada
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        ¿No tiene una cuenta? <Link to="/signup">Registrarse</Link>
      </div>
    </>
  );
};

export default Login;
