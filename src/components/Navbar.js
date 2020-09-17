/** @jsxFrag Fragment */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useState, useEffect } from 'react';
import ProfileButton from './ProfileButton';
import Button from './Button';
import Menu from './Menu';

const styles = (theme) => css`
  background-color: ${theme.colors.primary};
  position: relative;
  width: 100%;

  ul {
    ${theme.flex.row}
    align-items: center;
    margin: auto;
    width: 80%;
  }
`;

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  useEffect(() => {
    const handler = (event) => {
      const element = document.getElementById('dropdown-menu');

      if (element && !element.contains(event.target)) {
        toggleDropdown();
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  return (
    <nav css={styles}>
      <ul>
        <Button branding flat link to="/">
          Writely
        </Button>
        {true ? (
          <Fragment>
            <ProfileButton toggled={dropdownVisible} onClick={toggleDropdown} />
            <Menu showMenu={dropdownVisible}>
              <Button block flat link to="/settings" onClick={toggleDropdown}>
                Settings
              </Button>
              <Button block flat link to="/" onClick={toggleDropdown}>
                Sign Out
              </Button>
            </Menu>
          </Fragment>
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
