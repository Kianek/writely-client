import PropTypes from 'prop-types';
import Button from '../Button';
import EntryItem from '../EntryItem';
import List from '../List';
import './entry-list.scss';

function EntryList({ className, entries, height }) {
  if (!entries) {
    return <p>Error loading entries</p>;
  }

  return (
    <section id="entry-list" data-testid="entry-list">
      <List height={height}>
        {entries.length > 0 ? (
          entries.map((entry) => <EntryItem key={entry.id} entry={entry} />)
        ) : (
          <p>No entries yet.</p>
        )}
      </List>
    </section>
  );
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default EntryList;
