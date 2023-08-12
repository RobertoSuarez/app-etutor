import React, { useEffect } from 'react';
import useCourses from '../hooks/useCourses';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import '../components/styles/Card.css';
import { CourseCard } from '../components/CourseCard';

export default function Courses() {
  const { courses, isLoading } = useCourses('');

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  if (isLoading)
    return (
      <Box
        sx={{
          height: 'calc(100vh - 80px)',
          width: '100%',
        }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={3}
      >
        <CircularProgress size={62} />
        <Typography variant="body1">Recuperando los cursos 📚</Typography>
      </Box>
    );

  return (
    <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      <Box marginX={6} marginY={4}>
        <Typography variant="h4" mb={2} color="black">
          Todos los cursos
        </Typography>

        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {courses &&
            courses.map((item) => (
              <Grid item xs={4} key={item._id}>
                <CourseCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
