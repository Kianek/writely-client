import PropTypes from 'prop-types';
import './modal.scss';

function Modal({ heading, message, onConfirm, onCancel, children }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-title">{heading}</div>
        {message && <div className="modal-message">{message}</div>}
        {children}
        <div className="modal-actions">
          <button className="btn-confirm" onClick={onConfirm}>
            OK
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
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
