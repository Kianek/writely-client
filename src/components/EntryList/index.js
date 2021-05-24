import PropTypes from 'prop-types';
import EntryItem from '../EntryItem';
import List from '../List';

function EntryList({ className, entries, entrySelector }) {
  return (
    <section data-testid="entry-list">
      <List thin>
        {entries.map((entry) => (
          <EntryItem key={entry.id} entry={entry} onClick={entrySelector} />
        ))}
      </List>
    </section>
  );
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default EntryList;
