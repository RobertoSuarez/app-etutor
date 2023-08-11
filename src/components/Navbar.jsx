import { Link } from 'react-router-dom';
import { React, useRef, useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './styles/NavBar.css';
import { List } from './List';

export default function Navbar() {
  const Links = [
    { title: 'Teach', path: '/teacher' },
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
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">E-Tutor</h1>
      </Link>

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
          <List input={inputText} handleClose={handleClose} />
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
    </div>
  );
}
