import { React } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import useCourses from '../hooks/useCourses';
import { CourseCard } from '../components/CourseCard';

export default function Home() {
  const { user } = useUserAuth();

  let { isLoading, courses } = useCourses();
  courses = courses.slice(0, 3);

  // function CheckUser(user) {
  //   if (user) {
  //     return true;
  //   }
  // }

  return (
    <Box sx={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', height: 300 }}>
        <Box paddingX={6} paddingY={4}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            ¡Buenos días {user.displayName}!
          </Typography>
        </Box>
      </Box>

      <Box marginX={6} marginTop={'-225px'}>
        <Typography variant="h6" fontWeight={300} color={'white'}>
          Continúa estudiando donde te quedaste
        </Typography>

        <Grid container spacing={2} mt={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!isLoading ? (
            courses.map((item) => (
              <Grid item xs={4} key={item._id}>
                <CourseCard item={item} />
              </Grid>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>

        <Divider sx={{ marginY: 4, backgroundColor: 'black' }} />

        <Typography variant="h6" fontWeight={300}>
          Gráficas de tus estudios
        </Typography>

        <Grid
          container
          spacing={2}
          mt={1}
          mb={4}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">Gráfica</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                height: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">Gráfica</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>

    // <div className="home page">
    //   <Box
    //     p={4}
    //     sx={{
    //       backgroundImage: `url(${ImagePostal})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       minHeight: '60vh',
    //     }}
    //   >
    //     <h1 className="banner-heading1">Empezar a aprender desde </h1>
    //     <span className="banner-heading2">Los mejores maestros del mundo</span>

    //     <div className="content">
    //       <p>
    //         Comience, cambie o avance en su carrera con más de 5,000 cursos,
    //         Certificados profesionales y títulos de universidades de clase
    //         mundial y empresas.
    //       </p>
    //       <Typewriter
    //         options={{
    //           strings: ['Aprende desde cualquier lugar', 'Aprende Sin Límites'],
    //           autoStart: true,
    //           loop: true,
    //         }}
    //       />
    //       <div className="cta">
    //         {CheckUser(user) ? (
    //           <div>
    //             <Link to="/courses" className="link-1">
    //               Explora todos los cursos
    //             </Link>
    //           </div>
    //         ) : (
    //           <div>
    //             <Link to="/login" className="btn">
    //               Iniciar sesión
    //             </Link>
    //             <Link to="/teacher/" className="btn">
    //               Enseñar
    //             </Link>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     {/* <div className="image">
    //       <img src="/images/hero.svg" alt="Hero-image" />
    //     </div> */}
    //   </Box>
    //   <div className="p-2">
    //     <br />
    //     <br />
    //     <h2>Lorem Ipsum</h2>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi
    //     accusamus molestias beatae distinctio accusantium perferendis fugit
    //     quaerat alias ad. Lorem ipsum dolor sit amet consectetur, adipisicing
    //     elit. Placeat ratione deleniti, quod, in magni, laudantium alias ut nam
    //     eius corporis iste. Itaque vero labore dolores!
    //     <br />
    //     <br />
    //     <h2>Lorem Ipsum</h2>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
    //     accusamus totam corporis nulla nemo? Illo nihil quod, laboriosam non,
    //     assumenda, optio ab laudantium culpa quo iure perspiciatis voluptatem
    //     qui obcaecati vero quos quia consectetur! Sequi?
    //     <br />
    //     <br />
    //     <h2>Lorem Ipsum</h2>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab enim
    //     tenetur voluptatibus, nesciunt adipisci et amet fugiat hic incidunt
    //     alias molestias dicta nisi at totam esse natus voluptate, assumenda
    //     explicabo asperiores perspiciatis voluptates. Ad, harum. Possimus et sit
    //     at!
    //     <br />
    //     <br />
    //   </div>
    //   <Footer />
    // </div>
  );
}
