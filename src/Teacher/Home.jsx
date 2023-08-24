import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

import React from 'react';

export const Home = () => {
  return (
    <div>
      <div className="p-2">
        <div className="t-flex">
          <span>Saltar a la creación de cursos</span>
          <Link to="/teacher/courses/init" className="btn-2">
            Crea tu curso
          </Link>
        </div>
        <div className="p-2">
          <p>Según su experiencia, creemos que estos recursos serán útiles.</p>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Crear un curso atractivo</h3>
            <p>
              Ya sea que haya estado enseñando durante años o esté enseñando
              para el primera vez, puedes hacer un curso de participación. Hemos
              compilado recursos y mejores prácticas para ayudarlo a pasar al
              siguiente nivel, no importa por dónde empieces.
            </p>
          </div>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Empezar con el vídeo</h3>
            <p>
              Las videoconferencias de calidad pueden diferenciar su curso. Usa
              nuestro recursos para aprender los conceptos básicos.
            </p>
          </div>
          <div>
            <h3>Construye tu audiencia</h3>
            <p>Configure su curso para el éxito construyendo su audiencia.</p>
          </div>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Únase al desafío de los recién llegados:</h3>
            <p>
              Obtenga consejos y recursos exclusivos diseñados para ayudarlo a
              lanzar su primer curso más rápido! Instructores elegibles que
              publiquen su primer el curso a tiempo recibirá un bono especial
              para celebrar. Comenzar ¡hoy!
            </p>
          </div>
        </div>
        <div className="p-2 t-flex-col">
          ¿Estás listo para comenzar?
          <Link to="/teacher/courses/add" className="btn-2">
            Crea tu curso
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
