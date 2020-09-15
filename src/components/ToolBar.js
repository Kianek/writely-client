import React from 'react';
import classNames from 'classnames';
import '../styles/_toolbar.scss';

function ToolBar({ left, right, children }) {
  const activeStyles = { 'justify-left': left, 'justify-right': right };

  return (
    <div className={classNames(activeStyles)} id="toolbar">
      {children}
    </div>
  );
}

export default ToolBar;
