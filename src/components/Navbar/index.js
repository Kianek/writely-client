import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <nav role="navigation">
      <div>
        <Link className="branding" to="/">
          Writely
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
