/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';

const toolBarStyles = (theme) => css`
  ${theme.flex.row}
  border-radius: 3px;
  flex-wrap: wrap;
  margin: 0.5rem;
  width: 90%;

  button {
    margin: 1rem;
  }

  &.justify-left {
    justify-content: flex-start;
  }

  &.justify-right {
    justify-content: flex-end;
  }
`;

function ToolBar({ left, right, children }) {
  const activeStyles = { 'justify-left': left, 'justify-right': right };

  return (
    <div css={toolBarStyles} className={classNames(activeStyles)} id="toolbar">
      {children}
    </div>
  );
}

export default ToolBar;
