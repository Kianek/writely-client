import classNames from 'classnames';
import PropTypes from 'prop-types';
import './toolbar.scss';

function ToolBar({ children, left, right }) {
  return (
    <div
      id="toolbar"
      className={classNames({ left, right })}
      data-testid="toolbar"
    >
      {children}
    </div>
  );
}

ToolBar.propTypes = {
  children: PropTypes.any.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default ToolBar;
