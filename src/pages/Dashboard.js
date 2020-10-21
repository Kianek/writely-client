/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import JournalList from '../components/JournalList';
import Journal from '../components/Journal';
import EditJournal from '../components/EditJournal';
import Modal from '../components/Modal';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllAsync,
  createJournalAsync,
  updateJournalAsync,
  removeJournalAsync,
  selectJournal,
} from '../data/journals/journalsSlice';

const dashboardStyles = css`
  border-radius: 3px;
  height: 100%;
  margin: 2rem;
  padding: 1rem;
  width: 90%;
`;

function Dashboard() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.users.user);
  let userJournals = useSelector((state) => state.journals.journals);
  let selectedJournal = useSelector((state) => state.journals.selectedJournal);
  const [newJournalTitle, setNewJournalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getAllAsync(user.id));
  }, [dispatch, user]);

  const noJournalsExist = () => userJournals.length <= 0;

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function getEditJournals() {
    return userJournals.map((data) => (
      <EditJournal
        key={data.id}
        journal={data}
        modalHandler={() => {
          setShowModal(true);
          dispatch(selectJournal(data));
        }}
        deleteHandler={deleteJournal}
      />
    ));
  }

  function getDefaultJournals() {
    return userJournals.map((data) => <Journal key={data.id} journal={data} />);
  }

  function getJournals() {
    if (noJournalsExist()) {
      return (
        <div
          css={(theme) => css`
            color: ${theme.colors.darkGray};
          `}
        >
          No journals yet. Try adding one!
        </div>
      );
    }

    return editMode ? getEditJournals() : getDefaultJournals();
  }

  function addJournal() {
    dispatch(createJournalAsync({ userId: user.id, title: newJournalTitle }))
      .then(() => {
        closeModal();
      })
      .catch(() => console.log('unable to create journal'));
  }

  function updateJournal() {
    dispatch(
      updateJournalAsync({
        userId: user.id,
        title: newJournalTitle,
        id: selectedJournal.id,
      })
    )
      .then(() => {
        closeModal();
      })
      .catch((err) => console.log(err));
  }

  function closeModal() {
    setShowModal(false);
    setNewJournalTitle('');
  }

  function deleteJournal(journal) {
    dispatch(removeJournalAsync(journal));
  }

  return (
    <div css={dashboardStyles} id="dashboard">
      {showModal && (
        <Modal
          heading={editMode ? 'Update Journal' : 'Create Journal'}
          onConfirm={editMode ? updateJournal : addJournal}
          onCancel={closeModal}
        >
          <TextInput
            block
            placeholder="Title"
            value={newJournalTitle}
            onChange={setNewJournalTitle}
          />
        </Modal>
      )}
      <ToolBar right>
        <Button
          flat
          info
          toggled={editMode}
          disabled={noJournalsExist()}
          onClick={toggleEditMode}
        >
          <i className="fas fa-edit" />
        </Button>
        <Button
          flat
          success
          disabled={editMode}
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-plus" />
        </Button>
      </ToolBar>
      <JournalList>{getJournals()}</JournalList>
    </div>
  );
}

export default Dashboard;
