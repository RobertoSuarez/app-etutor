import { React } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import Typewriter from 'typewriter-effect';
import { Footer } from '../components/Footer';
import { Button } from '@mui/material';

export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <h1 className="banner-heading1">Empezar a aprender desde </h1>
        <Button color="primary" variant="contained">
          Hola, mundo
        </Button>
        <span className="banner-heading2">Los mejores maestros del mundo</span>

        <div className="content">
          <p>
            Comience, cambie o avance en su carrera con más de 5,000 cursos,
            Certificados profesionales y títulos de universidades de clase
            mundial y empresas.
          </p>
          <Typewriter
            options={{
              strings: ['Aprende desde cualquier lugar', 'Aprende Sin Límites'],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explora todos los cursos
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Iniciar sesión
                </Link>
                <Link to="/teacher/" className="btn">
                  Enseñar
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi
        accusamus molestias beatae distinctio accusantium perferendis fugit
        quaerat alias ad. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Placeat ratione deleniti, quod, in magni, laudantium alias ut nam
        eius corporis iste. Itaque vero labore dolores!
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        accusamus totam corporis nulla nemo? Illo nihil quod, laboriosam non,
        assumenda, optio ab laudantium culpa quo iure perspiciatis voluptatem
        qui obcaecati vero quos quia consectetur! Sequi?
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab enim
        tenetur voluptatibus, nesciunt adipisci et amet fugiat hic incidunt
        alias molestias dicta nisi at totam esse natus voluptate, assumenda
        explicabo asperiores perspiciatis voluptates. Ad, harum. Possimus et sit
        at!
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
