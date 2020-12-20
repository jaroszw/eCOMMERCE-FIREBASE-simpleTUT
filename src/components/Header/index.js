import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SimpleTut LOGO" />
          </Link>
        </div>
        <div className="callToAction">
          {currentUser && <span onClick={() => auth.signOut()}>Log Out</span>}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Logi In</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
