import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import MenuIcon from '../MenuIcon';
import './navbar.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

function Navbar() {
  let loggedIn = true;
  const [active, setActive] = useState(false);

  const closeMenu = () => setActive(false);

  useOutsideClick('#dropdown', closeMenu);

  return (
    <header>
      <nav role="navigation">
        <Link className="branding" to="/">
          Writely
        </Link>
        {loggedIn ? (
          <div id="dropdown">
            <MenuIcon
              onClick={() => setActive(!active)}
              menuActivated={active}
            />
            <Menu onClickOutside={() => setActive(false)} isVisible={active} />
          </div>
        ) : (
          <Link className="nav-link" to="/register">
            Register
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
