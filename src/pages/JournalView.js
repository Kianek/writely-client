import React, { useState } from 'react';
import Entry from '../components/Entry';
import EntryList from '../components/EntryList';
import EntryView from '../components/EntryView';
import mockEntries from '../data/mock-entries';
import '../styles/_journal-view.scss';

function JournalView() {
  const [entries, setEntries] = useState(
    mockEntries.map((entry) => <Entry entry={entry} />)
  );

  function loadEntry() {}

  return (
    <div id="journal-view">
      <EntryList>{entries}</EntryList>
      <EntryView journal="Fancy Journal" />
    </div>
  );
}

export default JournalView;
