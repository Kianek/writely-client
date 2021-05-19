import PropTypes from 'prop-types';
import './toolbar-button.scss';

function ToolBarButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

ToolBarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default ToolBarButton;
