import PropTypes from 'prop-types';
import Button from '../Button';
import EntryItem from '../EntryItem';
import List from '../List';
import './entry-list.scss';

function EntryList({ className, entries, entrySelector }) {
  return (
    <section id="entry-list" data-testid="entry-list">
      <List borderless thin>
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
