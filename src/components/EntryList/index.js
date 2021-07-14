import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import EntryItem from '../EntryItem';
import EntryListControls from '../EntryListControls';
import SearchInput from '../SearchInput';
import Selector from '../Selector';
import List from '../List';
import sortOptions, {
  TITLE_ASC,
  TITLE_DESC,
  DATE_ASC,
  DATE_DESC,
} from '../../utils/sort-options';
import './entry-list.scss';

function EntryList({ callback, entries, height }) {
  const [sortOrder, setSortOrder] = useState(DATE_DESC);
  const [searchText, setSearchText] = useState('');
  const [sortedEntries, setSortedEntries] = useState([]);

  const formatEntries = useCallback(() => {
    return [...entries].sort(sortOptions[sortOrder]);
  }, [entries, sortOrder]);

  const onSelect = (event) => {
    const { options } = event.target;
    const { selectedIndex } = options;
    const sort = options[selectedIndex]?.value;
    setSortOrder(sort);
    setSortedEntries(formatEntries());
  };

  useEffect(() => {
    setSortedEntries(formatEntries());
  }, [formatEntries]);

  return (
    <section id="entry-list" data-testid="entry-list">
      <EntryListControls>
        <SearchInput onChange={setSearchText} value={searchText} />
        <Selector
          onChange={onSelect}
          options={[DATE_DESC, DATE_ASC, TITLE_ASC, TITLE_DESC]}
        />
      </EntryListControls>
      <List height={height}>
        {entries?.length > 0 ? (
          sortedEntries.map((entry) => (
            <EntryItem key={entry.id} entry={entry} eventHandler={callback} />
          ))
        ) : (
          <p>No entries yet.</p>
        )}
      </List>
      <Button block success>
        New Entry
      </Button>
    </section>
  );
}

EntryList.propTypes = {
  callback: PropTypes.func,
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default EntryList;
