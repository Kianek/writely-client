import PropTypes from 'prop-types';
import classnames from 'classnames';
import './menu-icon.scss';

function MenuIcon({ menuActivated }) {
  return (
    <div data-testid="menu-icon">
      <i className={classnames('fas fa-user', { open: menuActivated })}></i>
    </div>
  );
}

MenuIcon.propTypes = {
  menuActivated: PropTypes.bool.isRequired,
};

export default MenuIcon;
