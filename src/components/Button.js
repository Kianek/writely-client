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
  danger,
  info,
  success,
  id,
}) {
  const activeStyles = {
    branding,
    outline,
    flat,
    dark,
    small,
    large,
    block,
    disabled,
    toggled,
    danger,
    info,
    success,
  };
  const classes = classNames('btn', activeStyles);

  return link ? (
    <Link
      className={classes}
      to={to}
      onClick={onClick}
      data-testid="linkButton"
    >
      {children}
    </Link>
  ) : (
    <button
      id={id ? id : null}
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
