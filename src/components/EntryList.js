/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Entry from './Entry';

const styles = css`
  height: 80%;
  padding: 0.5rem;
  overflow-y: auto;
`;

function EntryList({ entries }) {
  const formatEntries = (entries) => {
    return entries.map((entry) => <Entry key={entry.id} entry={entry} />);
  };

  return (
    <ul css={styles} id="entry-list">
      {entries.length > 0 ? (
        formatEntries(entries)
      ) : (
        <div>No entries yet...</div>
      )}
    </ul>
  );
}

export default EntryList;
