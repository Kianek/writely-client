import PropTypes from 'prop-types';
import './entry-item.scss';

function EntryItem({ title }) {
  return (
    <li>
      <h2>{title}</h2>
    </li>
  );
}

EntryItem.propTypes = {
  title: PropTypes.string,
};

export default EntryItem;
