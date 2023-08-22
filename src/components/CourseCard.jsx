import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';

export const CourseCard = ({ item }) => {
  const theme = useTheme();

  const suscribirse = () => {
    alert('Te has suscrito con exito');
  };

  return (
    <Card
      variant="elevation"
      sx={{
        maxWidth: 345,
        ':hover': {
          boxShadow: `${theme.palette.primary.main} 0px 3px 8px`,
        },
        cursor: 'pointer',
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
          {item.description.slice(0, 110) + '...'}
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
};

CourseCard.propTypes = {
  item: PropTypes.object.isRequired,
};
