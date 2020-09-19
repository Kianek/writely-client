/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import Entry from '../components/Entry';
import EntryList from '../components/EntryList';
import EntryView from '../components/EntryView';
import mockEntries from '../data/mock-entries';

const styles = (theme) => css`
  ${theme.flex.row}
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  width: 100%;
`;

function JournalView() {
  const [entries, setEntries] = useState(
    mockEntries.map((entry) => <Entry key={entry.id} entry={entry} />)
  );

  function loadEntry() {}

  return (
    <div css={styles}>
      <EntryList>{entries}</EntryList>
      <EntryView journal="Fancy Journal" />
    </div>
  );
}

export default JournalView;
