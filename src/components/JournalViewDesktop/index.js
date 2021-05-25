import useNavigateTo from '../../hooks/useNavigateTo';
import Button from '../Button';
import EntryList from '../EntryList';
import EntryView from '../EntryView';
import Row from '../Row';

function JournalViewDesktop({ entries }) {
  return (
    <div id="journal-view" data-testid="jv-desktop">
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
export default JournalViewDesktop;
