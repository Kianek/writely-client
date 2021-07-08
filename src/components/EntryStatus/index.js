import CharacterCounter from '../CharacterCounter';
import './entry-status.scss';

function EntryStatus({ bodyText, touched }) {
  return (
    <div id="entry-status">
      <CharacterCounter max={5} text={bodyText} />
      <p>{touched === true ? 'Unsaved changes' : 'No changes'}</p>
    </div>
  );
}

export default EntryStatus;
