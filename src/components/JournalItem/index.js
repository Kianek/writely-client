import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import TextInput from '../TextInput';
import './journal-item.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectJournalById } from '../../store/journals';
import classNames from 'classnames';
import { loadEntries } from '../../store/entries';

function JournalItem({ journal, editMode, editHandler }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openJournal = () => {
    console.log(`opening journal ${journal.id}`);
    dispatch(selectJournalById({ id: journal.id }));
    dispatch(loadEntries({ entries: journal.entries }));
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
          <p className="title">{journal.title}</p>
          <Button block flat onClick={editMode ? editHandler : openJournal}>
            {editMode ? 'Edit' : 'Open'}
          </Button>
        </div>
      </div>
    </li>
  );
}

JournalItem.propTypes = {
  journal: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default JournalItem;
