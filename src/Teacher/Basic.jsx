import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const categoriasDeCursos = [
  'Desarrollo Web',
  'Diseño Gráfico',
  'Marketing Digital',
  'Idiomas',
  'Salud y Bienestar',
];

export const Basic = ({ handleSaveBasicFireStore, databasic, photoURL }) => {
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    handleSaveBasicFireStore(data);
  };

  useEffect(() => {
    reset(databasic);

    // console.log(databasic);
  }, [databasic]);

  console.log(watch('title'));

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Paper sx={{ marginY: 3, marginX: 4, flex: 1, padding: 3 }} elevation={3}>
        <Typography variant="h5" mb={2}>
          Página de inicio del curso
        </Typography>
        <Divider color="black" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            margin: '2rem 0px',
            display: 'flex',
            gap: 25,
            flexDirection: 'column',
          }}
        >
          <TextField
            defaultValue="Curso de golang"
            {...register('title')}
            label="Título del curso"
            variant="outlined"
            fullWidth
            helperText="Tu título tiene que ser claro pero llamativo, tiene que captar la atención y debe estar optimizado para la búsqueda."
          />
          <TextField
            {...register('subtitle')}
            label="Subtítulo del curso"
            variant="outlined"
            fullWidth
            helperText="Utiliza 1 o 2 palabras clave relacionadas y menciona las tres o cuatro áreas más importantes que trates durante tu curso."
          />

          <TextField
            label="Descripción del curso"
            {...register('description')}
            variant="outlined"
            multiline
            fullWidth
            helperText="La descripción debe tener 200 palabras como mínimo."
          />

          <FormControl fullWidth>
            <InputLabel id="categoria">Categoria</InputLabel>
            <Select
              defaultValue={''}
              {...register('category')}
              variant="outlined"
              labelId="categoria"
              label="Categoria"
            >
              {categoriasDeCursos.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" color="primary" variant="contained">
            Guardar
          </Button>
        </form>

        {/* Foto */}
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Imagen del curso
        </Typography>

        <Grid container sx={{ border: 'solid 1px black' }}>
          <Grid item xs={6}>
            <img
              src={
                photoURL ||
                'https://s.udemycdn.com/course/750x422/placeholder.jpg'
              }
              width="100%"
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: 2 }}>
            <Typography variant="body1">
              Carga la imagen de tu curso aquí. Para ser aceptada, debe cumplir
              nuestros estándares de calidad para las imágenes de los cursos.
              Directrices importantes: 750 x 422 píxeles; formato .jpg, .jpeg,
              .gif, o .png.; y sin texto en la imagen.
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Subir Imagen
            </Button>
          </Grid>
        </Grid>

        {/* videos */}
        <Typography variant="subtitle1" fontWeight={500} mt={3} mb={1}>
          Vídeo promocional
        </Typography>

        <Grid container sx={{ border: 'solid 1px black' }}>
          <Grid item xs={6}>
            <img
              src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
              width="100%"
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: 2 }}>
            <Typography variant="body1">
              Tu vídeo promocional es una forma rápida y atractiva de que los
              estudiantes vean un adelanto de lo que aprenderán en tu curso. Con
              un buen vídeo promocional, aumentarán las posibilidades de que los
              estudiantes que se estaban planteando inscribirse en tu curso se
              animen a hacerlo.
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Subir Vídeo
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

Basic.propTypes = {
  handleSaveBasicFireStore: PropTypes.func.isRequired,
  databasic: PropTypes.object,
  photoURL: PropTypes.string,
};
