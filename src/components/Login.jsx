import React, { useState } from 'react';
import { Link as LinkNavigation, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ilustracionLogin from '../ilustraciones/Fingerprint-pana.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
    <Box>
      <Paper
        variant="outlined"
        sx={{ marginX: 'auto', p: 4, marginY: 2, width: 500 }}
      >
        <Typography
          variant="h4"
          textAlign={'center'}
          fontWeight={500}
          color={'primary'}
        >
          Inicio de sesión
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ilustracionLogin} width={200} />
        </Box>
        {error && <Alert variant="danger">{error}</Alert>}
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
            Iniciar
          </Button>

          <Divider color="black" />

          <GoogleButton
            style={{ width: '100%' }}
            label="Iniciar con Google"
            onClick={handleGoogleSignIn}
          />
        </Stack>
      </Paper>
      <Paper
        variant="outlined"
        sx={{
          marginX: 'auto',
          marginY: 4,
          width: 500,
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          ¿No tiene una cuenta?
          <Link ml={1} color="primary" component={LinkNavigation} to="/signup">
            Registrarse
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
