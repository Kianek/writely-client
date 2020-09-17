/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = css`
  height: 80%;
  padding: 0.5rem;
  overflow-y: auto;
`;

function EntryList(props) {
  return (
    <ul css={styles} id="entry-list">
      {props.children}
    </ul>
  );
}

export default EntryList;
