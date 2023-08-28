import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { React, useRef, useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './styles/NavBar.css';
import { MenuListItem } from './MenuListItem';
import { Box, Typography } from '@mui/material';

// eslint-disable-next-line no-unused-vars
export default function Navbar({ handleDrawerOpen }) {
  const Links = [
    { title: 'Teach', path: '/teacher/courses' },
    { title: <IoMdCart />, path: '/cart' },
  ];

  const [notification, setNotification] = useState(false);

  const showNotification = () => setNotification(!notification);

  const [inputText, setInputText] = useState('');

  const [isHovered, setIsHovered] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [isFocused, setIsFocused] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const inputTextRef = useRef(null);

  const onInputHandler = (e) => {
    //convert input text to lower case
    // var lowerCase = e.target.value.toLowerCase();
    setInputText(e.target.value);
  };

  const onInputFocus = () => {
    setIsFocused(true);
    setOpen(true);
  };

  const onInputBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const onHandleEnter = () => {
    setIsHovered(true);
  };

  const onHandleLeave = () => {
    setIsHovered(false);
  };

  const onClearInput = () => {
    setInputText('');
    inputTextRef.current.focus();
  };

  const onKey = (e) => {
    // key Esc
    if (e.keyCode == 27) {
      handleClose();
      inputTextRef.current.blur();
    }
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h4" component={Link} to="/" color={'primary'}>
          📚e-tutor
        </Typography>
      </Box>

      <div
        className={
          notification ? 'notification notification-active' : 'notification'
        }
      >
        <li>Bienvenido a e-Learn</li>
        <li>Curso desde solo ₹ 299</li>
      </div>

      <div
        className="box-search-form position-relative "
        onMouseEnter={onHandleEnter}
        onMouseLeave={onHandleLeave}
      >
        <SearchOutlinedIcon
          style={{ fontWeight: 'lighter', color: '#79797a' }}
        />
        <input
          type="text"
          ref={inputTextRef}
          id="inputbusqueda"
          autoComplete="off"
          className="box-search-input"
          placeholder="Busca cursos, paginas. Por ejemplo 'Curso de React.js'"
          value={inputText}
          onChange={onInputHandler}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onKeyDown={onKey}
        />

        <div style={{ width: '24px' }}>
          <CloseOutlinedIcon
            onClick={onClearInput}
            className="box-icon-close"
            style={{ display: isHovered && inputText ? 'block' : 'none' }}
          />
        </div>

        <div
          className="position-absolute top-100 start-0 box-contenedor-resultados"
          style={{ display: open ? 'block' : 'none' }}
        >
          <MenuListItem input={inputText} handleClose={handleClose} />
        </div>
      </div>

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
    </Box>
  );
}

Navbar.propTypes = {
  handleDrawerOpen: PropTypes.func,
};
