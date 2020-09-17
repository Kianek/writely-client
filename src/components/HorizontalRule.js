/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  border-bottom: solid 1px ${theme.colors.lightGray};
  margin-bottom: 0.5rem;
  width: 80%;
`;

function HorizontalRule(props) {
  return <div css={styles} />;
}

export default HorizontalRule;
