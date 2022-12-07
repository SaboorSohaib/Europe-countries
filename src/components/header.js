import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../images/icons.svg';
import '../App.css';

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="header-container">
      <Link to="/">
        <div>
          <svg className="back-arrow">
            <use xlinkHref={`${icons}#icon-chevron-left1`} />
          </svg>
        </div>
      </Link>
      <div>{children}</div>
      <div className="right-container">
        <svg className="mic-setting">
          <use xlinkHref={`${icons}#icon-microphone`} />
        </svg>
        <svg className="mic-setting">
          <use xlinkHref={`${icons}#icon-settings`} />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
