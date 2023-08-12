import { React } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useCourses from '../hooks/useCourses';
import { useSearchPage } from '../hooks/useSearchPage';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';

import './styles/List.css';
import { MenuListItemCourse } from './MenuListItemCourse';
import { Box, CircularProgress, Typography } from '@mui/material';

/*
  Ideas que me gustarian que esten en la lista de opciones

  - Las 3 ultimas busquedas que ha hecho el usuario, estos 
    resultados deben estar en función alo que escriba el usuario.
  - Los 3 primeros curso que se asimile a lo que ha escrito el usuario.
  - Se pueden buscar paginas u opciones de la aplicación
*/

export const MenuListItem = ({ input = '', handleClose }) => {
  // eslint-disable-next-line no-unused-vars
  let { isLoading, error, courses = [] } = useCourses(input);
  courses = courses.slice(0, 3);
  const { pages } = useSearchPage(input);

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const onHandleCourse = (curso) => {
    console.log('Se dio click en el curso: ', curso);
    handleClose();
  };

  // eslint-disable-next-line no-unused-vars
  const onHandleHistory = (h) => {
    console.log('Se dio click en el historial: ', h);
    handleClose();
  };

  const onHandlePage = (page) => {
    console.log('Click en una pagina: ', page);
    handleClose();
    navigate(page.url);
  };

  if (isLoading) {
    return (
      <div className="box-cargando">
        <Box
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" mb={1}>
            Cargando datos... 🧠
          </Typography>
          <CircularProgress size={24} />
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-error">
        <div className="texto-base">
          No podemos conectar con el servicio en este momento. Vuelva a
          intentarlo más tarde o actualice 📶
        </div>
      </div>
    );
  }

  return (
    <div className="box-resultados">
      {courses
        ? courses.map((c) => {
            return (
              <MenuListItemCourse
                key={c._id}
                className="historial-items"
                course={c}
                handleClose={handleClose}
              />
            );
          })
        : ''}

      {/* {historial &&
        historial.map((h) => {
          return (
            <div
              key={h}
              className="historial-items"
              onClick={() => {
                onHandleHistory(h);
              }}
            >
              <RotateLeftOutlinedIcon className="historial-icon-reload" />
              <div className="historial-text">{h}</div>
            </div>
          );
        })} */}

      {pages &&
        pages.map((p) => {
          return (
            <div
              key={p.label}
              className="historial-items"
              onClick={() => {
                onHandlePage(p);
              }}
            >
              <FindInPageOutlinedIcon className="historial-icon-reload" />
              <div className="historial-text">{p.label}</div>
            </div>
          );
        })}
    </div>
  );

  // if (DataisLoaded) {
  //   filteredData = course.items.courses.filter((el) => {
  //     if (input === "") {
  //       return el;
  //     } else {
  //       return el.title.toLowerCase().includes(input);
  //     }
  //   });
  // }

  // return (
  //   <ul className="searched-data">
  //     {filteredData.map((item) => (
  //       <Link to={"/learning/" + item._id} key={item._id}>
  //         <li className="no-list">{item.title}</li>
  //       </Link>
  //     ))}
  //   </ul>
  // );
};

MenuListItem.propTypes = {
  input: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
