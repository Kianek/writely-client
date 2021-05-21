import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu.scss';
import classNames from 'classnames';

function Menu({ onClickOutside, isVisible }) {
  const history = useHistory();

  function signOut() {
    onClickOutside();
    history.replace('/');
  }

  return (
    <div
      id="menu"
      className={classNames({
        active: isVisible,
        inactive: !isVisible,
      })}
      data-testid="menu"
    >
      <div className="menu-content">
        <i className="arrow fas fa-sort-up"></i>
        <Link className="link" to="/settings">
          <div className="link-content">Settings</div>
        </Link>
        <button className="link" onClick={signOut}>
          <div className="link-content">Sign Out</div>
        </button>
      </div>
    </div>
  );
}

Menu.propTypes = {
  isVisible: PropTypes.bool,
};

export default Menu;
