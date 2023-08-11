import React, { useState } from 'react';
import { Link as LinkNavigation, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useUserAuth } from '../context/UserAuthContext';
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState('');
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const credenciales = await signUp(email, password);
      console.log(credenciales);

      setSuccess('Usuario registrado correctamente');

      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('El correo ya esta en uso');
      }
      //console.log('Mensaje de depuración');
      //navigate('/signup');
    }
  };

  return (
    <>
      <div className="p-4 box">
        <Typography variant="h4" textAlign={'center'} mb={3}>
          Registro de estudiantes
        </Typography>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && (
          <Alert variant="success">
            <Typography variant="subtitle1">{success}</Typography>
            <Typography variant="caption">
              Se redireccionara en un segundo <CircularProgress size={16} />
            </Typography>
          </Alert>
        )}
        <Stack spacing={3}>
          <TextField
            label="Correo electronico"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Registrarse
          </Button>
        </Stack>
      </div>
      <div className="p-4 box mt-3 text-center">
        <Typography variant="body1" color="text.secondary">
          ¿Ya tienes una cuenta?{' '}
          <Link color="primary" component={LinkNavigation} to="/login">
            Iniciar sesión
          </Link>
        </Typography>
      </div>
    </>
  );
};

export default Signup;
