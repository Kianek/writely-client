/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  ${theme.flex.row}
  align-items: center;
  border: solid 1px ${theme.colors.lightGray};
  border-radius: 3px;
  justify-content: center;
  flex-wrap: wrap;
  height: 25rem;
  margin-top: 0.5rem;
  overflow-y: auto;
  padding: 1rem;
`;

function JournalList(props) {
  return (
    <ul css={styles} id="journal-list">
      {props.children}
    </ul>
  );
}

export default JournalList;
