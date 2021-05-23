import classNames from 'classnames';
import PropTypes from 'prop-types';
import './toolbar.scss';

function ToolBar({ children, className, left, right }) {
  return (
    <div
      id="toolbar"
      className={classNames({ left, right }, className)}
      data-testid="toolbar"
    >
      {children}
    </div>
  );
}

ToolBar.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default ToolBar;
