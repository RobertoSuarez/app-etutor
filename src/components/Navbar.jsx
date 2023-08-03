import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import { List } from './List';
import { Box, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '1rem',
};

export default function Navbar() {
  const Links = [
    { title: 'Teach', path: '/teacher' },
    { title: <IoMdCart />, path: '/cart' },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [notification, setNotification] = useState(false);

  const showNotification = () => setNotification(!notification);

  const [inputText, setInputText] = useState('');

  // eslint-disable-next-line no-unused-vars
  const inputHandler = (e) => {
    //convert input text to lower case
    // var lowerCase = e.target.value.toLowerCase();
    setInputText(e.target.value);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">E-Tutor</h1>
      </Link>

      <div
        className={
          notification ? 'notification notification-active' : 'notification'
        }
      >
        <li>Welcome to e-Learn</li>
        <li>Course starting from ₹299 only</li>
      </div>

      <div className="box-search">
        <TextField
          id="outlined-basic"
          onClick={handleOpen}
          // onChange={inputHandler}
          // value={inputText}
          color="secondary"
          autoComplete={false}
          variant="outlined"
          fullWidth
          className="input-search"
          label="Buscar"
        />

        <div className="container-opciones">
          <List input={inputText} />
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography variant="h6">Texto en el modal</Typography>
          <Typography>mucho texot xD</Typography>
        </Box>
      </Modal>

      {/* <div className="search-box">
          <div className="search">
            <div className="text-r">Hola,</div>
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                value={inputText}
                autoComplete={false}
                variant="outlined"
                fullWidth
                label="Search"
              />
          </div>
          
          <List input={inputText} id="list-box" />
      </div> */}

      <ul className="nav-link">
        {Links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
        <li>
          <div onClick={showNotification} className="pointer">
            <MdNotifications />
          </div>
        </li>
      </ul>
    </div>
  );
}
