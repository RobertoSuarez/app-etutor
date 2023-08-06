import { React } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import useCourses from '../hooks/useCourses';
import { useSearchPage } from '../hooks/useSearchPage';
import './styles/List.css';
import { useHistorial } from '../hooks/useHistorial';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import { useEffect } from 'react';

/*
  Ideas que me gustarian que esten en la lista de opciones

  - Las 3 ultimas busquedas que ha hecho el usuario, estos 
    resultados deben estar en función alo que escriba el usuario.
  - Los 3 primeros curso que se asimile a lo que ha escrito el usuario.
  - Se pueden buscar paginas u opciones de la aplicación
*/

export const List = ({ input = '', handleClose }) => {
  const { isLoading, error, courses = [] } = useCourses(input);
  const { pages } = useSearchPage(input);
  const { historial } = useHistorial(input);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const onHandleCourse = (curso) => {
    console.log('Se dio click en el curso: ', curso);
    handleClose();
  };

  const onHandleHistory = (h) => {
    console.log('Se dio click en el historial: ', h);
    handleClose();
  };

  const onHandlePage = (page) => {
    console.log('Click en una pagina: ', page);
    handleClose();
    navigate(page.url);
  };

  useEffect(() => {
    if (courses) {
      console.log('curso: ', courses);
    }
  }, [courses]);

  if (isLoading) {
    return (
      <div className="box-cargando">
        <h2 className="texto-base">Cargando datos... 🧠</h2>
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
              <div
                key={c._id}
                className="historial-items"
                onClick={() => {
                  onHandleCourse(c);
                }}
              >
                <OndemandVideoOutlinedIcon className="historial-icon-reload" />
                <div className="course-text">
                  <div className="curso-title">{c.title}</div>
                  <div className="curso-subtitle">Curso</div>
                </div>
              </div>
            );
          })
        : ''}

      {historial &&
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
        })}

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

List.propTypes = {
  input: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
