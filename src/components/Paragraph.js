import React from 'react';
import classNames from 'classnames';
import '../styles/_paragraph.scss';

function Paragraph({ small, large, children, danger, errors }) {
  const classes = classNames('paragraph', {
    small,
    large,
    'danger': errors || danger ? true : false,
  });
  return <p className={classes}>{children}</p>;
}

export default Paragraph;
