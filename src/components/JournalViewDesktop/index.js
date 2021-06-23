import useNavigateTo from '../../hooks/useNavigateTo';
import Button from '../Button';
import EntryList from '../EntryList';
import EntryView from '../EntryView';
import Row from '../Row';

function JournalViewDesktop({ entries }) {
  return (
    <div id="journal-view" data-testid="jv-desktop">
      <Row left spaceBetween>
        <Button circle info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-arrow-left" />
        </Button>
        <Button success>New Entry</Button>
      </Row>
      <Row spaceEvenly stretch>
        <EntryList entries={entries} height="70vh" />
        <EntryView />
      </Row>
    </div>
  );
}
export default JournalViewDesktop;
