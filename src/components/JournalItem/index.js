import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import Column from '../Column';
import Row from '../Row';
import TextInput from '../TextInput';
import './journal-item.scss';
import { Fragment, useState } from 'react';
import JournalItemControls from './JournalItemControls';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectJournalById } from '../../store/journals';

function JournalItem({
  journal,
  editMode,
  editHandler,
  deleteHandler,
  toggleEditMode,
}) {
  const history = useHistory();
  // const {journalId} = useParams();
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(journal.title);

  const openJournal = () => {
    console.log(`opening journal ${journal.id}`);
    dispatch(selectJournalById({ id: journal.id }));
    history.push(`/journal/${journal.id}`);
  };

  return (
    <li className="journal-item" data-testid="journal-item">
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
        <JournalItemControls
          editMode={editMode}
          editHandler={editHandler}
          toggleEditMode={toggleEditMode}
          deleteHandler={deleteHandler}
        />
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
