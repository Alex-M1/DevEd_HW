import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav(props) {
  return (
    <nav className="header-navigation">
      <ul className="header-navigation__links">
        <li className="header-navigation__links--item">
          <NavLink exact activeClassName="header-navigation__links--active" to="/">
            Books
          </NavLink>
        </li>
        <li className="header-navigation__links--item">
          <NavLink exact activeClassName="header-navigation__links--active" to="/create">
            Create Book
          </NavLink>
        </li>
      </ul>
    </nav >
  );
}

export default HeaderNav;