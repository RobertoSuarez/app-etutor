import React, { useState } from 'react';
import { FcClock } from 'react-icons/fc';
import { BsBarChartFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import imagePlaceholder from '../placeholder-image.jpg';
import { useUserAuth } from '../context/UserAuthContext';

const CreateCourse = () => {
  const teacherId = localStorage.getItem('userId');
  // console.log(teacherId);

  const { user } = useUserAuth();

  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    level: '',
    time: '',
    price: '',
    video: '',
    user: teacherId,
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setCourse({ ...course, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    // const { title, description, image, level, time, price, video, user } =
    //   course;

    console.log({
      ...course,
      user: user.uid,
    });

    // const res = await fetch(`${BASE_URL}/api/course/add`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title,
    //     description,
    //     image,
    //     level,
    //     time,
    //     price,
    //     video,
    //     user,
    //   }),
    // });
    // const data = await res.json();

    // if (data.status === 422 || !data) {
    //   window.alert('Registro fallido');
    // } else {
    //   window.alert('Curso agregado exitosamente');
    //   navigate('/teacher/courses');
    // }
  };

  return (
    <>
      <section className="create-course">
        <h2>Crear un nuevo curso</h2>
        <br />
        <div className="flex-p">
          <div className="card update-preview">
            <div className="preview-tag">Avance</div>

            {/* <img src={(user && user.photoURL) || ProfileImage} /> */}
            <img
              src={course.image || imagePlaceholder}
              alt={course.title}
              className="card-img"
            />
            <div className="card-content">
              <div className="card-row">
                <div className="course-title">{course.title}</div>
              </div>
              <div className="card-row">
                <div className="discription">{course.description}</div>
              </div>
              <div className="card-row"></div>
              <div className="card-row">
                <div className="level">
                  <BsBarChartFill />
                  <span>{course.level}</span>
                </div>
                <div className="time">
                  <FcClock />
                  {course.time} Horas
                </div>
              </div>
              <div className="card-row">
                <div className="price">
                  <BiRupee />
                  {course.price}
                </div>
                <div className="rating">
                  <i>
                    Ver <IoIosArrowForward />
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="card update-preview">
            <div className="preview-tag">Avance</div>
            <iframe
              src={`https://www.youtube.com/embed/${course.video}`}
              title="Reproductor de videos de youtube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <br />

        <form method="POST" className="course-form">
          <div className="form-group">
            <label htmlFor="name">Título del curso</label>
            <input
              type="text"
              name="title"
              id="name"
              autoComplete="off"
              value={course.title}
              onChange={handleInputs}
              placeholder="Bootcamp de desarrollo web"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">
              URL de la imagen en miniatura del curso
            </label>
            <input
              type="url"
              name="image"
              id="image"
              autoComplete="off"
              value={course.image}
              onChange={handleInputs}
              placeholder="Ingrese la URL de la imagen"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción del curso</label>
            <textarea
              type="text"
              name="description"
              id="description"
              autoComplete="off"
              value={course.description}
              onChange={handleInputs}
              placeholder="Acerca del curso"
              required="required"
            />
          </div>
          <div className="form-group form-group-select">
            <label htmlFor="level">Seleccione el nivel del curso</label>
            <select value={course.level} onChange={handleInputs} name="level">
              <option className="option" value="none" selected hidden>
                Seleccione una opción
              </option>
              <option className="option" value="Beginner">
                Principiante
              </option>
              <option className="option" value="Intermediate">
                Intermedio
              </option>
              <option className="option" value="Advanced">
                Avanzado
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time">Duración del curso</label>
            <input
              type="number"
              name="time"
              id="time"
              autoComplete="off"
              value={course.time}
              onChange={handleInputs}
              placeholder="Ingrese la duración del curso en horas"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Establecer precio del curso</label>
            <input
              type="number"
              name="price"
              id="price"
              autoComplete="off"
              value={course.price}
              onChange={handleInputs}
              placeholder="Ingrese la cantidad en dólares"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Video">Ingrese la identificación del video</label>
            <input
              type="url"
              name="video"
              id="video"
              autoComplete="off"
              value={course.video}
              onChange={handleInputs}
              placeholder="Todos los caracteres después de la última barra. P.ej. - qoeLC9Yeo6s de url- https://youtu.be/qoeLC9Yeo6s"
              required
            />
            <div>
              Por favor vea la vista previa en <a href="#">arriba</a> para
              asegúrese de haber ingresado la identificación de video correcta
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="user"></label>
            <input
              type="text"
              name="user"
              id="image"
              autoComplete="off"
              value={course.user}
              onChange={handleInputs}
              placeholder="Enter User Id"
            />
          </div> */}

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Upload Course"
              onClick={PostData}
              className="btn"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateCourse;
