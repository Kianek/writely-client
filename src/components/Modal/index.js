import PropTypes from 'prop-types';
import ToolBar from '../ToolBar';
import './modal.scss';

function Modal({ heading, message, onConfirm, onCancel, children }) {
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <div className="modal-title">
          <h2 className="heading">{heading}</h2>
        </div>
        {message && <div className="modal-message">{message}</div>}
        {children}
        <ToolBar className="modal-actions" right>
          <button className="btn-confirm" onClick={onConfirm}>
            OK
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </ToolBar>
      </div>
    </div>
  );
}

Modal.propTypes = {
  heading: PropTypes.string.isRequired,
  message: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default Modal;
