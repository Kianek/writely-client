/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';

const styles = (theme) => css`
  color: ${theme.colors.darkGray};
  font-size: 1rem;

  &.danger {
    color: ${theme.colors.danger};
  }

  &.small {
    font-size: 0.8rem;
  }

  &.large {
    font-size: 1.2rem;
  }
`;

function Paragraph({ small, large, children, danger, errors }) {
  const classes = classNames('paragraph', {
    small,
    large,
    'danger': errors || danger ? true : false,
  });
  return (
    <p css={styles} className={classes}>
      {children}
    </p>
  );
}

export default Paragraph;
