import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProfileImage from '../avatar.png';
// import LogoutButton from './LogoutButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

export default function Sidebar({ handleDrawerOpen }) {
  const [menuVisible, setMenuVisible] = useState(true); // Inicialmente visible

  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const buttonCloseRef = useRef(null);

  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // function CheckUser(user) {
  //   if (user) {
  //     return true;
  //   }
  // }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const Links = [
    {
      title: 'Inicio',
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    {
      title: 'Todos los cursos',
      icon: <MovieFilterOutlinedIcon />,
      path: '/courses',
    },
    {
      title: 'Mi aprendizaje',
      icon: <CastForEducationOutlinedIcon />,
      path: '/learning',
    },
    {
      title: 'Configuración',
      icon: <SettingsApplicationsOutlinedIcon />,
      path: '/settings',
    },
    {
      title: 'Contacta con nosotros',
      icon: <ConnectWithoutContactOutlinedIcon />,
      path: '/contact',
    },
    {
      title: 'Sobre nosotros',
      icon: <InfoOutlinedIcon />,
      path: '/about',
    },
  ];

  return (
    <Box width={'100%'}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 4,
        }}
        mt={3}
        paddingX={2}
      >
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Avatar
            alt={user.displayName}
            src={(user && user.photoURL) || ProfileImage}
            sx={{ width: 48, height: 48 }}
          />
          <Stack>
            <Typography variant="subtitle2">
              {user && user.displayName}
            </Typography>
            <Typography variant="body2">{user && user.email}</Typography>
          </Stack>
        </Stack>

        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            ref={buttonCloseRef}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      {/* <div className="row">
          <div className="user-image">
            <img src={(user && user.photoURL) || ProfileImage} />
          </div>
          <div className="center">
            <div>{user && user.displayName}</div>
            <div>{user && user.email}</div>

            <li>{CheckUser(user) ? <></> : <LoginButton />}</li>
          </div>
        </div> */}
      <Divider sx={{ backgroundColor: 'black', marginTop: 3 }} />
      <List>
        {Links.map((item, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                LinkComponent={Link}
                to={item.path}
                selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Cerrar Sesión'}></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <ul className="row">
          {Links.map((item, index) => {
            return (
              <Link to={item.path} key={index} className="sidebar-link">
                <li>
                  {item.icon}
                  {item.title}
                </li>
              </Link>
            );
          })}
          <div className="sidebar-link">
            <li>{CheckUser(user) ? <LogoutButton /> : <></>}</li>
          </div>
        </ul> */}
    </Box>
  );
}

Sidebar.propTypes = {
  handleDrawerOpen: PropTypes.func,
};
