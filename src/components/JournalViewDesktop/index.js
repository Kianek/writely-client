import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useNavigateTo from '../../hooks/useNavigateTo';
import Button from '../Button';
import EntryList from '../EntryList';
import EntryView from '../EntryView';
import Row from '../Row';

function JournalViewDesktop() {
  const entries = useSelector((state) => state.entries.entries);
  const [entry, setEntry] = useState({});

  useEffect(() => {
    if (entries && entries[0]) {
      setEntry(entries[0]);
    }
  }, [setEntry, entry]);

  return (
    <div id="journal-view" data-testid="jv-desktop">
      <Row left spaceBetween>
        <Button circle info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-arrow-left" />
        </Button>
        <Button success>New Entry</Button>
      </Row>
      <Row spaceEvenly stretch>
        <EntryList entries={entries} height="50vh" />
        <EntryView entry={entry} />
      </Row>
    </div>
  );
}
export default JournalViewDesktop;
