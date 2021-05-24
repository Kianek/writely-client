import { Fragment, useEffect, useState } from 'react';
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

function Journal() {
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const [currentEntry, setCurrentEntry] = useState(null);

  useEffect(() => {
    const resizeWindow = () => {
      console.log(
        `x: ${document.body.clientWidth}, y: ${document.body.clientHeight}`
      );
    };

    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  });

  const selectJournal = (id) => {
    console.log(id);
    const entry = entries.find((e) => e.id === id);
    if (!entry) {
      return;
    }

    setCurrentEntry(entry);
  };

  return (
    <div id="journal-view">
      <Row left>
        <Button info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-arrow-left" />
        </Button>
      </Row>
      <Row spaceEvenly>
        <EntryList entries={entries} />
        <EntryView />
      </Row>
    </div>
  );
}

export default Journal;
