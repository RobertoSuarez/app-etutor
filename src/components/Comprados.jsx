import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const Comprados = ({ item }) => {
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
            {item.description.slice(0, 100) + '...'}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LinearProgress
              variant="determinate"
              value={10}
              sx={{ flexGrow: 1, marginRight: 5 }}
            />
            <Typography variant="body2" color="text.secondary">
              10%
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={`/learning/${item._id}`}
            endIcon={<CastForEducationOutlinedIcon />}
          >
            Ingresar
          </Button>
        </CardActions>
      </Card>
    );
  }
};

Comprados.propTypes = {
  item: PropTypes.object.isRequired,
};
