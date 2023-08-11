import React from 'react';
import PropTypes from 'prop-types';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import { useNavigate } from 'react-router-dom';

export const ListItemCourse = ({ handleClose, course }) => {
  const navigate = useNavigate();

  const onHandleCourse = (curso) => {
    console.log('Se dio click en el curso: ', curso);
    handleClose();
    navigate(`/learning/${curso._id}`);
  };

  return (
    <div
      className="historial-items"
      onClick={() => {
        onHandleCourse(course);
      }}
    >
      <OndemandVideoOutlinedIcon className="historial-icon-reload" />
      <div className="course-text">
        <div className="curso-title">{course.title}</div>
        <div className="curso-subtitle">Curso</div>
      </div>
    </div>
  );
};

ListItemCourse.propTypes = {
  course: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};
