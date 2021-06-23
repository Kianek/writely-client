import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import TextInput from '../TextInput';
import './journal-item.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectJournalById } from '../../store/journals';
import classNames from 'classnames';

function JournalItem({ journal, editMode }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(journal.title);

  const openJournal = () => {
    console.log(`opening journal ${journal.id}`);
    dispatch(selectJournalById({ id: journal.id }));
    history.push(`/journal/${journal.id}`);
  };

  return (
    <li
      className={classNames('journal-item', {
        edit: editMode,
      })}
      data-testid="journal-item"
    >
      <div className="content">
        <div className="main-content">
          {editMode ? (
            <TextInput fluid onChange={setEditTitle} value={editTitle} />
          ) : (
            <p className="title">{journal.title}</p>
          )}
          <Button block flat onClick={openJournal}>
            Open
          </Button>
        </div>
      </div>
    </li>
  );
}

JournalItem.propTypes = {
  journal: PropTypes.object.isRequired,
  editHandler: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default JournalItem;
