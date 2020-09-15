import React from 'react';
import classNames from 'classnames';
import '../styles/_panel.scss';

function Panel({ wide, children }) {
  return <div className={classNames('panel', { wide })}>{children}</div>;
}

export default Panel;
