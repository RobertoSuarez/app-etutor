import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config';

function Course() {
  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });
  // const [teacher, setTeacher] = useState({
  //   items: [],
  //   DataisLoadedT: false,
  // });
  const { id } = useParams();

  useEffect(() => {
    const url = `${BASE_URL}/api/course/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCourse({
          items: json,
          DataisLoaded: true,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const DataisLoaded = course.DataisLoaded;

  // var tearcherId;

  // useEffect(() => {
  //   // console.log(course.items.course.user);
  //   const turl = `http://localhost:5000/api/course/${tearcherId}`;

  //   const fetchTeacherData = async () => {
  //     try {
  //       const response = await fetch(turl);
  //       const json = await response.json();
  //       setTeacher({
  //         items: json,
  //         DataisLoadedT: true,
  //       });
  //     } catch (error) {}
  //   };
  //   if (DataisLoaded) {
  //     tearcherId = course.items.course.user._id;
  //     console.log(tearcherId);
  //     return fetchTeacherData();

  //   }
  // }, []);

  // console.log(tearcherId);

  if (!DataisLoaded)
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
    <div className="page">
      <div className="cr-title">{course.items.course.title}</div>
      <div className="course p-2">
        <div>
          <iframe
            width="560"
            src={`https://www.youtube.com/embed/${course.items.course.video}`}
            title="Reproductor de videos de youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video"
          ></iframe>

          <h3>Sobre el Curso</h3>
          <div className="course-description">
            {course.items.course.description}
          </div>
          <br />
          {/* {console.log(teacher.items[0])} */}
          {/* <h3>Other Courses by</h3> */}
          {/* {course.teacher.} */}
          <h3>Comentarios / Preguntas</h3>
          <p>No hay Comentarios</p>
        </div>
        <div>
          <h3>Detalles del curso</h3>
          <span>Nivel del curso: {course.items.course.level}</span>
          <br />
          <span>Duración del curso: {course.items.course.time}</span>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Course;
