/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const buttonStyles = ({ button }) => css`
  ${button.base};

  &.branding {
    ${button.branding}
  }

  &.toggled {
    ${button.toggled}
  }

  &.flat {
    ${button.flat}
  }

  &.outline {
    ${button.outline}
  }

  &.success {
    ${button.success}
  }

  &.info {
    ${button.info}
  }

  &.danger {
    ${button.danger}
  }

  &.large {
    ${button.large}
  }

  &.small {
    ${button.small}
  }

  &.block {
    ${button.block}
  }

  &.disabled,
  &.disabled:hover {
    ${button.disabled}
  }
`;

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
  loading,
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
  const classes = classNames(activeStyles);
  const buttonContent = loading ? 'Loading...' : children;

  return link ? (
    <Link
      css={buttonStyles}
      className={classes}
      to={to}
      onClick={onClick}
      data-testid="linkButton"
    >
      {buttonContent}
    </Link>
  ) : (
    <button
      id={id ? id : null}
      type={submit ? submit : 'button'}
      disabled={disabled || loading}
      css={buttonStyles}
      className={classes}
      onClick={onClick}
      data-testid="plainButton"
    >
      {buttonContent}
    </button>
  );
}

export default Button;
