import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './menu.scss';

function Menu({ isVisible }) {
  const history = useHistory();

  function signOut() {
    history.replace('/');
  }

  return (
    <div data-testid="menu">
      <Link to="/settings">Settings</Link>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

Menu.propTypes = {
  isVisible: PropTypes.bool,
};

export default Menu;
