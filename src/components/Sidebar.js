import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
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
import { FaBars } from 'react-icons/fa';

export default function Sidebar() {
  const [menuVisible, setMenuVisible] = useState(true); // Inicialmente visible

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
    <>
      <div className={`sidebar ${menuVisible ? '' : 'sidebar-contenedor'}`}>
        <Box sx={{ marginLeft: '10px', marginBottom: '10px' }}>
          <FaBars onClick={toggleMenu} className="menu-icon" />
        </Box>
        <div className={`sidebar ${menuVisible ? '' : 'sidebar-hidden'}`}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
            mt={3}
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
        </div>
      </div>
    </>
  );
}
