import PropTypes from 'prop-types';
import './toolbar.scss';

function ToolBar({ children }) {
  return <div data-testid="toolbar">{children}</div>;
}

ToolBar.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ToolBar;
