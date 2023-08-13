import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const Settings = () => {
  const { user } = useUserAuth();
  const [displayName, setDisplayName] = useState('');
  const [openBack, setOpenBack] = useState(false);
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    if (user.displayName) setDisplayName(user.displayName);
  }, [user]);

  const onUpdateProfile = (e) => {
    e.preventDefault();
    setOpenBack(true);
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
        console.log('Se actualizo correctamente');
        setGuardado(true);
      })
      .catch((e) => {
        console.log('Error al actualizar: ', e);
      })
      .finally(() => {
        setOpenBack(false);
      });
  };

  return (
    <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      <Box marginX={6} marginY={4}>
        <Typography variant="h5" sx={{ fontWeight: '600' }} mb={2}>
          Configuración de la cuenta
        </Typography>
        <Box mb={4}>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography variant="h6">Información de perfil</Typography>
            {guardado && (
              <Typography variant="subtitle2">Guardado ✨</Typography>
            )}
          </Stack>
          <form onSubmit={onUpdateProfile}>
            <Grid container spacing={2} mb={4} mt={1}>
              <Grid item xs={6}>
                <TextField
                  label="Nombres"
                  name="nombre"
                  type="text"
                  variant="filled"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary" type="submit">
                    Guardar
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Backdrop
              open={openBack}
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </form>

          <Divider color="grey" />
        </Box>
        <Box mb={2}>
          <Typography variant="h6">Preferencias de notificación</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color={'GrayText'}>
              Enviar notificaciones de nuevos cursos al correo electronico
            </Typography>
            <Switch></Switch>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color={'GrayText'}>
              Mostrar notificaciones de nuevos cursos en la aplicación
            </Typography>
            <Switch></Switch>
          </Box>
        </Box>

        <Divider color="grey" />

        <Box mt={2}>
          <Typography variant="h6">Opciones de visualización</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color={'GrayText'}>
              Activar el modo oscuro
            </Typography>
            <Switch></Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
