import {
  Box,
  Button,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export const Settings = () => {
  return (
    <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      <Box marginX={6} marginY={4}>
        <Typography variant="h5" sx={{ fontWeight: '600' }} mb={2}>
          Configuración de la cuenta
        </Typography>
        <Box mb={4}>
          <Typography variant="h6">Información de perfil</Typography>
          <form>
            <Grid container spacing={2} mb={4} mt={1}>
              <Grid item xs={6}>
                <TextField
                  label="Nombres"
                  type="text"
                  variant="filled"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Apellidos"
                  type="text"
                  variant="filled"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Correo electronico"
                  type="email"
                  variant="filled"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary">
                    Guardar
                  </Button>
                </Box>
              </Grid>
            </Grid>
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
