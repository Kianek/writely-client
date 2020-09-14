import React from 'react';
import '../styles/_menu.scss';

function Menu({ showMenu, children }) {
  return showMenu && <div className="dropdown-menu">{children}</div>;
}

export default Menu;
