import { Link } from 'react-router-dom';
import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { useState } from 'react';
import ProfileImage from '../avatar.png';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { AiFillHome } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { FaBookReader } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import {
  RiUserSettingsFill,
  RiMessage2Fill,
  RiInformationFill,
} from 'react-icons/ri';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  const { user } = useUserAuth();

  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  const Links = [
    {
      title: 'Inicio',
      icon: <AiFillHome />,
      path: '/',
    },
    {
      title: 'Todos los cursos',
      icon: <ImBooks />,
      path: '/courses',
    },
    {
      title: 'Mi aprendizaje',
      icon: <FaBookReader />,
      path: '/learning',
    },
    {
      title: 'Mi carrito',
      icon: <IoMdCart />,
      path: '/cart',
    },
    {
      title: 'Configuraciones de la cuenta',
      icon: <RiUserSettingsFill />,
      path: '/settings',
    },
    {
      title: 'Contacta con nosotros',
      icon: <RiMessage2Fill />,
      path: '/contact',
    },
    {
      title: 'Sobre nosotros',
      icon: <RiInformationFill />,
      path: '/about',
    },
  ];

  return (
    <>
      <div id="menu-btn" className="menu-button" onClick={ShowSidebar}>
        =
      </div>
      <div
        className={sidebar ? 'sidebar active-sidebar' : 'sidebar'}
        onClick={ShowSidebar}
      >
        <div className="row">
          <div className="user-image">
            {/* <img src="/images/avatar.png" alt="user profile" /> */}
            <img src={(user && user.photoURL) || ProfileImage} />
          </div>
          <div className="center">
            <div>{user && user.displayName}</div>
            <div>{user && user.email}</div>

            <li>{CheckUser(user) ? <></> : <LoginButton />}</li>
          </div>
        </div>
        <hr className="sidebar-hr" />
        <ul className="row">
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
        </ul>
      </div>
    </>
  );
}
