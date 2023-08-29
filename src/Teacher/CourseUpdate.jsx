import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Basic } from './Basic';
import { useEffect } from 'react';

const drawerWidth = 300;

const paginas = [
  {
    label: 'Página de inicio del curso',
    icon: <ArtTrackOutlinedIcon />,
    link: 'basics',
  },
  {
    label: 'Estudiantes objetivo',
    icon: <CoPresentOutlinedIcon />,
    link: 'goals',
  },
  { label: 'Programa', icon: <CloudUploadOutlinedIcon />, link: 'curriculum' },
];

export const CourseUpdate = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Box display={'flex'}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {paginas.map((pagina) => (
              <ListItem key={pagina.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={pagina.link}
                  selected={location.pathname.includes(pagina.link)}
                >
                  <ListItemIcon>{pagina.icon}</ListItemIcon>
                  <ListItemText primary={pagina.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Routes>
          <Route path="/basics" element={<Basic />}></Route>
          <Route
            path="/goals"
            element={<Typography>Objetivos</Typography>}
          ></Route>
          <Route
            path="/curriculum"
            element={<Typography>progrma del curso</Typography>}
          ></Route>
        </Routes>
      </Box>
    </Box>
  );
};
