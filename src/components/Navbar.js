import React from 'react';
import Button from './Button';
import '../styles/_layout.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <Button branding flat link to="/">
          Writely
        </Button>
        <Button flat link to="/register">
          Register
        </Button>
      </ul>
    </nav>
  );
}

export default Navbar;
