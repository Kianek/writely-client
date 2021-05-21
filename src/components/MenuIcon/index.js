import PropTypes from 'prop-types';
import './menu-icon.scss';
import classNames from 'classnames';

function MenuIcon({ onClick, menuActivated }) {
  return (
    <button
      className={classNames('menu-icon', { active: menuActivated })}
      onClick={onClick}
      data-testid="menu-icon"
    >
      <i className="fas fa-user"></i>
    </button>
  );
}

MenuIcon.propTypes = {
  menuActivated: PropTypes.bool,
};

export default MenuIcon;
