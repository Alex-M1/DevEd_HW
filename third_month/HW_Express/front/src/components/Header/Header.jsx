import './Header.scss';
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

function Header(props) {
  return (
    <header className="header-bg">
      <div className="container">
        <div className="app-header">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;

