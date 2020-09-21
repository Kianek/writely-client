/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from './Button';
import ToolBar from './ToolBar';

const modalBackground = (theme) => css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.shadow};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
`;
const modalBody = (theme) => css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 3px;
  margin: auto;
  padding: 1rem;
  width: 400px;
`;

function Modal({ heading, children, onConfirm, onCancel }) {
  return (
    <div css={modalBackground} id="modal-bg">
      <div css={modalBody} id="modal-body">
        <h3 css={{ marginBottom: '1rem' }}>{heading}</h3>
        <div>{children}</div>
        <ToolBar right>
          <Button success flat onClick={onConfirm}>
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
