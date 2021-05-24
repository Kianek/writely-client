import { Fragment, useState } from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
import EntryList from '../components/EntryList';
import EntryView from '../components/EntryView';
import Row from '../components/Row';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';

const entries = [
  {
    id: 1,
    title: 'Entry 1',
    tags: 'one,two,three',
    body: 'Blah',
  },
  {
    id: 2,
    title: 'Entry 2',
    tags: 'one,two,three',
    body: 'Blah',
  },
  {
    id: 3,
    title: 'Entry 3',
    tags: 'one,two,three',
    body: 'Blah',
  },
];

function JournalView() {
  const [currentEntry, setCurrentEntry] = useState(null);

  const selectJournal = (id) => {
    console.log(id);
    const entry = entries.find((e) => e.id === id);
    if (!entry) {
      return;
    }

    setCurrentEntry(entry);
  };

  return (
    <Column spaceBetween>
      <ToolBar left>
        <Button info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-arrow-left" />
        </Button>
      </ToolBar>
      <Row spaceEvenly>
        <EntryList entries={entries} />
        <EntryView />
      </Row>
    </Column>
  );
}

export default JournalView;
