import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../styles/_buttons.scss';

function Button({
  branding,
  outline,
  flat,
  dark,
  small,
  large,
  block,
  link,
  to,
  children,
  eventHandler,
}) {
  const activeStyles = {
    'branding': branding,
    'outline': outline,
    'flat': flat,
    'dark': dark,
    'small': small,
    'large': large,
    'block': block,
  };
  const classes = classNames('btn', activeStyles);

  return link ? (
    <Link className={classes} to={to} data-testid="linkButton">
      {children}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={eventHandler}
      data-testid="plainButton"
    >
      {children}
    </button>
  );
}

export default Button;
