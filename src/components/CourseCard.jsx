import React from 'react';
import PropTypes from 'prop-types';

import { FcClock } from 'react-icons/fc';
import { BsBarChartFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import imagePlaceholder from '../placeholder-image.jpg';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const CourseCard = ({ item }) => {
  const suscribirse = () => {
    alert('Te has suscrito con exito');
  };
  // eslint-disable-next-line no-constant-condition
  if (true) {
    return (
      <Card
        sx={{
          maxWidth: 345,
          ':hover': {
            boxShadow: 10,
          },
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          title={item.title}
        ></CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description.slice(0, 125) + '...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={`/learning/${item._id}`}
            endIcon={<CastForEducationOutlinedIcon />}
          >
            Ver más
          </Button>
          <Button
            size="small"
            component={Link}
            onClick={suscribirse}
            endIcon={<AddBoxOutlinedIcon />}
          >
            Suscribirme
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Box className="card" height={'100%'}>
      <img
        src={item.image || imagePlaceholder}
        alt={item.title}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-row">
          <div className="course-title">{item.title}</div>
        </div>
        <div className="card-row">
          <div className="discription">
            {item.description.slice(0, 100) + '...'}
          </div>
        </div>
        <div className="card-row"></div>
        <div className="card-row">
          <div className="level">
            <BsBarChartFill />
            <span>{item.level}</span>
          </div>
          <div className="time">
            <FcClock />
            {item.time} Horas
          </div>
        </div>
        <div className="card-row">
          <div className="price">
            <BiRupee />
            {item.price}
          </div>
          <div className="rating">
            <Link to={`/learning/${item._id}`}>
              Ver <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

CourseCard.propTypes = {
  item: PropTypes.object.isRequired,
};
