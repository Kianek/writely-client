import PropTypes from 'prop-types';
import './entry-item.scss';
import { useDispatch } from 'react-redux';
import { selectEntryById } from '../../store/entries';

function EntryItem({ entry, eventHandler }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectEntryById({ id: entry.id }));
    eventHandler();
  };

  return (
    <li id="entry-item" onClick={onClick}>
      <h2>{entry.title}</h2>
      <p>{entry.lastModified}</p>
    </li>
  );
}

EntryItem.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default EntryItem;
