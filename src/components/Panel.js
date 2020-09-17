/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';

const styles = (theme) => css`
  ${theme.flex.column}
  align-items: center;
  border: solid 1px ${theme.colors.lightGray};
  border-radius: 2px;
  margin: auto;
  padding: 0.5rem;

  button,
  a {
    margin: 0.5rem;
  }

  &.wide {
    width: 500px;
  }
`;

function Panel({ wide, children }) {
  return (
    <div css={styles} className={classNames({ wide })}>
      {children}
    </div>
  );
}

export default Panel;
