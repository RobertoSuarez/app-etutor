import React, { useEffect } from 'react';
import useCourses from '../hooks/useCourses';
import { Box, Grid, Typography } from '@mui/material';
import { Comprados } from '../components/Comprados';

export default function Learning() {
  const { courses, isLoading } = useCourses('');
  useEffect(() => {
    console.log(courses);
  }, [courses]);

  if (isLoading)
    return (
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  return (
    <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      <Box marginX={6} marginY={4}>
        <Typography variant="h4" mb={2}>
          Cursos comprados
        </Typography>

        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {courses &&
            courses.map((item) => (
              <Grid item xs={4} key={item._id}>
                <Comprados item={item} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
