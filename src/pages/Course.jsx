import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useUserAuth } from '../context/UserAuthContext';
import jsPDF from 'jspdf';

function Course() {
  const fakeComments = [
    {
      image:
        'https://lh3.googleusercontent.com/a-/AD_cMMRuXT_XVqgt-4edwNHo0-X2GtTRjfuLp4qIbm9oxKi_7GU=s48-p',
      name: 'ROBERTO CARLOS SUÁREZ LITARDO',
      text: 'Muy buen curso',
    },
    {
      image:
        'https://lh3.googleusercontent.com/a-/AD_cMMQQF4BjS3hPWrq57Y0KWy3BVpmZKp6SnqxPFCEiu086NQU=s40-p',
      name: 'LUCRECIA ALEJANDRINA LLERENA GUEVARA',
      text: 'Buen curso para escribir un paper!',
    },
  ];

  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });
  // const [teacher, setTeacher] = useState({
  //   items: [],
  //   DataisLoadedT: false,
  // });
  const { id } = useParams();

  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(fakeComments);
  const { user } = useUserAuth();

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
  }, [id, user]);
  console.log(course);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newFakeComment = {
        image: user.photoURL,
        name: user.displayName,
        text: newComment,
      };

      setNewComment('');
      setComments((prevComments) => [...prevComments, newFakeComment]); // Agregar el nuevo comentario al estado de comentarios
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const textLines = [
      `Certificado de culminación del curso ${course.items.course.title}`,
      `Se acredita los conocimientos de dicho curso a ${user.displayName}.`,
    ];

    let yPosition = 10;

    textLines.forEach((line) => {
      doc.text(line, 10, yPosition);
      yPosition += 10; // Ajusta el valor según el espaciado deseado entre líneas
    });

    doc.save(`${user.displayName}_pdf.pdf`);
  };

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
          {/* {console.log(teacher.items[0])} */}
          {/* <h3>Other Courses by</h3> */}
          {/* {course.teacher.} */}
          <hr
            className="separator"
            style={{
              border: '1px solid gray',
              margin: '15px 0',
            }}
          />
          <h3>Comentarios / Preguntas</h3>
          <Grid container spacing={2} mb={3}>
            {comments.map((comment, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                style={{
                  textAlign: index % 2 === 0 ? 'left' : 'left',
                  marginLeft: index % 2 === 0 ? 0 : 'auto',
                }}
              >
                <div className="comment-box">
                  <img
                    src={comment.image}
                    alt="Usuario"
                    className="comment-image"
                  />
                  <div className="comment-details">
                    <span className="comment-name">{comment.name}</span>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          <div style={{ display: 'flex', width: '100%' }}>
            <div
              style={{
                flex: '0 0 50%',
                alignItems: 'center',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Ingresa un comentario"
                variant="outlined"
                InputProps={{
                  style: { width: '234%' },
                }}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ marginLeft: '0', marginRight: 'auto' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '10px' }}
                  onClick={handleAddComment}
                >
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Detalles del curso</h3>
          <span>Nivel del curso: {course.items.course.level}</span>
          <br />
          <span>Duración del curso: {course.items.course.time}</span>
          <br />
          <Button size="small" onClick={generatePDF}>
            Obtener certificado
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Course;
