import React from 'react';
import Button from './Button';
import ToolBar from './ToolBar';
import '../styles/_modal.scss';

function Modal({ heading, children, onConfirm, onCancel }) {
  return (
    <div id="modal-bg">
      <div id="modal-body">
        <h3>{heading}</h3>
        <p>{children}</p>
        <ToolBar right>
          <Button flat onClick={onConfirm}>
            OK
          </Button>
          <Button danger flat onClick={onCancel}>
            Cancel
          </Button>
        </ToolBar>
      </div>
    </div>
  );
}

export default Modal;
