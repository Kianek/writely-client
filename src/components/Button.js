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
  onClick,
  submit,
  disabled,
  toggled,
}) {
  const activeStyles = {
    'branding': branding,
    'outline': outline,
    'flat': flat,
    'dark': dark,
    'small': small,
    'large': large,
    'block': block,
    'disabled': disabled,
    'toggled': toggled,
  };
  const classes = classNames('btn', activeStyles);

  return link ? (
    <Link className={classes} to={to} data-testid="linkButton">
      {children}
    </Link>
  ) : (
    <button
      type={submit ? submit : 'button'}
      disabled={disabled ? true : false}
      className={classes}
      onClick={onClick}
      data-testid="plainButton"
    >
      {children}
    </button>
  );
}

export default Button;
