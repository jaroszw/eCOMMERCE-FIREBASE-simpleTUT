import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SimpleTut LOGO" />
          </Link>
        </div>
        <div className="callToAction">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
