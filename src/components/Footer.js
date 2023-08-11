import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="nav-logo">e-Learn</div>
        &copy; 2022
      </div>
      <div className="middle">
        <span>Creado y diseñado por</span>
        <span>Dilkhush Raj</span>
        <span>
          <a href="https://linkedin.com/in/dilkhushraj">
            <BsLinkedin />
          </a>{' '}
          <a href="https://github.com/dilkhush-raj">
            <AiFillGithub />
          </a>
        </span>
      </div>
      <div className="right">
        <Link to="/teacher">Conviértete en profesor en e-Learn</Link>
      </div>
    </div>
  );
};
