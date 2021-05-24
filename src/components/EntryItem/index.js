import PropTypes from 'prop-types';
import './entry-item.scss';

function EntryItem({ entry, onClick }) {
  return (
    <li id="entry-item" onClick={() => console.log(entry.id)}>
      <h2>{entry.title}</h2>
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
