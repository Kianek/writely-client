import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './menu.scss';

function Menu({ onClickOutside, isVisible }) {
  const history = useHistory();
  const links = [
    { id: 1, url: '/profile', text: 'Profile' },
    { id: 2, url: '/', text: 'Sign Out' },
  ];

  const navigateTo = (link) => () => {
    onClickOutside();
    history.push(link);
  };

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
        {links.map((link) => (
          <button key={link.id} className="link" onClick={navigateTo(link.url)}>
            <div className="link-content">{link.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

Menu.propTypes = {
  isVisible: PropTypes.bool,
};

export default Menu;
