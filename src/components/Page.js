/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  ${theme.flex.column}
  align-items: center;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

function Page({ children }) {
  return <div css={styles}>{children}</div>;
}

export default Page;
