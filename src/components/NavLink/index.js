import { Link } from 'react-router-dom';
import './navlink.scss';

function NavLink({ to, children }) {
  return (
    <Link className="navlink" to={to}>
      {children}
    </Link>
  );
}

export default NavLink;
