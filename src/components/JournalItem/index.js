import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './journal-item.scss';

function JournalItem({ journal, editHandler, deleteHandler }) {
  const history = useHistory();

  const openJournal = () => {
    console.log(`opening journal ${journal.id}`);
    history.push(`/journal/${journal.id}`);
  };

  return (
    <li className="journal-item" data-testid="journal-item">
      <div className="content">
        <div className="main-content">
          <p className="title">{journal.title}</p>
          <Button block flat onClick={openJournal}>
            Open
          </Button>
        </div>
        <div className="controls">
          <button className="edit" onClick={editHandler}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="delete" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

JournalItem.propTypes = {
  journal: PropTypes.object.isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default JournalItem;
