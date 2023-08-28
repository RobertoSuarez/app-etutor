import '../components/styles/Card.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { Box, Button, TextField, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ListCourse } from './components/ListCourse';

export const Courses = () => {
  const { user } = useUserAuth();

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');

  // Obtener los cursos del usuario
  useEffect(() => {
    if (!user.uid) return;

    try {
      const docRef = doc(db, 'users', user.uid);

      const subscriber = onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          console.log(userData);
          let cursos = [{ title: '' }];
          cursos = userData.cursos;
          if (search) {
            cursos = cursos.filter((item) => item.title.includes(search));
          }
          setCourses(cursos);
        } else {
          console.log('No existe esos datos');
        }
      });

      // Deja de subscribirse a los datos
      return () => {
        subscriber();
      };
    } catch (e) {
      console.log('Error: ', e);
    }
  }, [user, search]);

  return (
    <Box marginX={6} marginY={4}>
      <Typography variant="h4">Cursos </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '3.2rem',
          my: 2,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <TextField
            variant="outlined"
            label="Busca en tus cursos"
            sx={{ width: 300 }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to={'./init'}
        >
          Nuevo Curso
        </Button>
      </Box>

      <ListCourse courses={courses} />
    </Box>
  );
};
