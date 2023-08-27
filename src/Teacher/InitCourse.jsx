import PropTypes from 'prop-types';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useAddCourse } from '../hooks/useAddCourse';
import { useNavigate } from 'react-router-dom';

const categoriasDeCursos = [
  'Desarrollo Web',
  'Diseño Gráfico',
  'Marketing Digital',
  'Idiomas',
  'Salud y Bienestar',
];

export const InitCourse = () => {
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const [course, setCourse] = useState({
    name: '',
    category: '',
    public: false,
  });

  const { handleSaveCourse, loading } = useAddCourse();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputCourse = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCrear = () => {
    handleSaveCourse(course)
      .then((docRef) => {
        console.log('Documento escrito con ID: ', docRef.id);
        setDialogOpen(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    navigate('/teacher/courses');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <SimpleDialog
        course={course}
        open={dialogOpen}
        onClose={handleCloseDialog}
      ></SimpleDialog>
      <Typography variant="h3">Creando el curso</Typography>
      <Box sx={{ maxWidth: 600, mt: 3 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key={0}>
            <StepLabel>Define el nombre del curso</StepLabel>
            <StepContent>
              <Typography>
                ¡Empecemos a dar forma a tu curso! En este paso, te invitamos a
                darle un nombre que captura la esencia y el propósito de lo que
                vas a enseñar. Asegúrate de elegir un nombre que sea atractivo y
                refleje la temática central del curso. Esto es lo primero que
                verán tus futuros estudiantes, ¡así que déjales intrigados!
              </Typography>

              <TextField
                label="Nombre del curso"
                variant="filled"
                value={course.name}
                name="name"
                onChange={handleInputCourse}
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    handleNext();
                  }
                }}
                fullWidth
                sx={{ my: 2 }}
              />
              <div>
                <Button
                  variant="contained"
                  disabled={course.name.length < 10 ? true : false}
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continuar
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step key={2}>
            <StepLabel>Define la categoria</StepLabel>
            <StepContent>
              <Typography>
                Enhorabuena por llegar al segundo paso. Aquí es donde afinas aún
                más los detalles. Selecciona la categoría en la que mejor encaje
                tu curso. Esto ayudará a tus estudiantes a encontrarlo más
                fácilmente cuando estén buscando cursos relacionados. Escoge la
                categoría que mejor se ajuste al contenido principal del curso y
                que atraiga al público adecuado.
              </Typography>

              <FormControl fullWidth sx={{ my: 3 }} variant="filled">
                <InputLabel>Categoria</InputLabel>
                <Select
                  labelId="categori-course"
                  value={course.category}
                  name="category"
                  onChange={handleInputCourse}
                >
                  {categoriasDeCursos.map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div>
                <Button
                  variant="contained"
                  onClick={handleCrear}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={!course.category ? true : false}
                >
                  Crear
                </Button>

                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Atras
                </Button>
              </div>
            </StepContent>
          </Step>
        </Stepper>
      </Box>
    </Box>
  );
};

const SimpleDialog = ({ course, onClose, open }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Curso creado con exito</DialogTitle>
      <DialogContent>
        <Typography>
          El curso {course.name} ha sido creado con exito.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Entendido</Button>
      </DialogActions>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  course: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
