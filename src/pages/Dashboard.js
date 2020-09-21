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
import mockJournals from '../data/mock-journals';

const dashboardStyles = css`
  border-radius: 3px;
  height: 100%;
  margin: 2rem;
  padding: 1rem;
  width: 90%;
`;

function Dashboard() {
  const [newJournalTitle, setNewJournalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [journals, setJournals] = useState(
    mockJournals.map((data) => <Journal key={data.id} journal={data} />)
  );

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function getEditJournals() {
    return mockJournals.map((data) => (
      <EditJournal
        key={data.id}
        journal={data}
        deleteHandler={deleteJournal}
        modalHandler={() => setShowModal(true)}
      />
    ));
  }

  function getJournals() {
    return mockJournals.map((data) => <Journal key={data.id} journal={data} />);
  }

  function addJournal() {
    setShowModal(false);
    setNewJournalTitle('');
  }

  function closeModal() {
    setShowModal(false);
    setNewJournalTitle('');
  }

  function updateJournal() {
    setShowModal(false);
    setNewJournalTitle('');
  }

  function deleteJournal() {}

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
        <Button flat info toggled={editMode} onClick={toggleEditMode}>
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
      <JournalList>{editMode ? getEditJournals() : getJournals()}</JournalList>
    </div>
  );
}

export default Dashboard;
