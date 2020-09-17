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

  &.disabled {
    ${button.disabled}
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

  return link ? (
    <Link
      css={buttonStyles}
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
      css={buttonStyles}
      className={classes}
      onClick={onClick}
      data-testid="plainButton"
    >
      {children}
    </button>
  );
}

export default Button;
