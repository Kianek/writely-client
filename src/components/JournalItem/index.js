import PropTypes from 'prop-types';
import './journal-item.scss';

function JournalItem({ title, editHandler, deleteHandler }) {
  return (
    <li data-testid="journal-item">
      <div>
        <p>{title}</p>
        <div>
          <button onClick={editHandler}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={deleteHandler}>
            <i className="fas fa-delete"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

JournalItem.propTypes = {
  title: PropTypes.string.isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default JournalItem;
