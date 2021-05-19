import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <header>
      <nav role="navigation">
        <Link className="branding" to="/">
          Writely
        </Link>
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
