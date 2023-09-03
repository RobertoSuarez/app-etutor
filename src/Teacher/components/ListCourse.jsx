import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const ListCourse = ({ courses = [] }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {courses.map((course) => (
        <ListCourseItem key={course.id} course={course} />
      ))}
    </Box>
  );
};

ListCourse.propTypes = {
  courses: PropTypes.array.isRequired,
};

const ListCourseItem = ({ course }) => {
  console.log(course);

  if (!course) {
    return <Box>Cargando ...</Box>;
  }

  return (
    <Box
      sx={{
        border: '1px solid #9E9FA5',
        display: 'flex',
        justifyContent: 'start',
        height: '8rem',
      }}
    >
      <Box width={'10rem'} height={'100%'}>
        <img
          width={'100%'}
          height={'100%'}
          style={{
            objectFit: 'cover',
          }}
          src={
            course.basics.photoURL
              ? course.basics.photoURL
              : 'https://s.udemycdn.com/course/200_H/placeholder.jpg'
          }
        />
      </Box>

      <Box
        sx={{
          width: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingY: 4,
          marginLeft: 4,
        }}
      >
        <Typography variant="subtitle1" fontWeight={500}>
          {course.basics.title}
        </Typography>
        <Typography variant="caption">
          {course.basics.public ? 'Publicado' : 'Sin publicar'}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Button
          variant="outlined"
          LinkComponent={Link}
          to={`./${course.id}/manage/basics`}
        >
          Editar / gestionar curso
        </Button>
      </Box>
    </Box>
  );
};

ListCourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
