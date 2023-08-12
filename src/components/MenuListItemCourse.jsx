import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

export const MenuListItemCourse = ({ handleClose, course }) => {
  const navigate = useNavigate();

  const onHandleCourse = () => {
    console.log('Se dio click en el curso: ', course);
    handleClose();
    navigate(`/learning/${course._id}`);
  };

  return (
    <Box
      paddingY={1}
      paddingX={2}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        ':hover': {
          backgroundColor: 'ButtonShadow',
        },
        ':focus': {
          background: 'red',
        },
      }}
      onClick={onHandleCourse}
    >
      <Box mr={2}>
        <img
          src={course.image}
          width={48}
          height={36}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </Box>
      <Stack>
        <Typography variant="subtitle1" fontWeight={500}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Nivel: {course.level}
        </Typography>
      </Stack>
    </Box>
  );
};

MenuListItemCourse.propTypes = {
  course: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};
