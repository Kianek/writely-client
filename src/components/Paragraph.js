/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';

const styles = (theme) => css`
  background-color: ${theme.colors.white};
  border: none;
  color: ${theme.colors.darkGray};
  font-size: 1rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${theme.colors.white};
  }

  &.danger {
    color: ${theme.colors.danger};
  }

  &.small {
    font-size: 0.625rem;
  }

  &.large {
    font-size: 1.2rem;
  }
`;

function Paragraph({ small, large, children, danger }) {
  const classes = classNames({
    small,
    large,
    danger,
  });
  return (
    <p css={styles} className={classes}>
      {children}
    </p>
  );
}

export default Paragraph;
