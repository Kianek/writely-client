import React, { useState } from 'react';
import ProfileButton from './ProfileButton';
import Button from './Button';
import Menu from './Menu';
import '../styles/_layout.scss';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <nav>
      <ul>
        <Button branding flat link to="/">
          Writely
        </Button>
        {true ? (
          <>
            <ProfileButton toggled={dropdownVisible} onClick={toggleDropdown} />
            <Menu showMenu={dropdownVisible}>
              <Button block flat link to="/settings">
                Settings
              </Button>
              <Button block flat link to="/">
                Sign Out
              </Button>
            </Menu>
          </>
        ) : (
          <Button flat link to="/register">
            Register
          </Button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
