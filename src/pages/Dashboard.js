/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import JournalList from '../components/JournalList';
import Journal from '../components/Journal';
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

  function addJournal() {
    setShowModal(false);
    setNewJournalTitle('');
  }

  function closeModal() {
    setNewJournalTitle('');
  }

  function updateJournal() {}

  function deleteJournal() {}

  return (
    <div css={dashboardStyles} id="dashboard">
      {showModal && (
        <Modal
          heading="Create Journal"
          onConfirm={addJournal}
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
        <Button flat success onClick={() => setShowModal(true)}>
          {editMode ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-plus" />
          )}
        </Button>
      </ToolBar>
      <JournalList>{editMode ? null : journals}</JournalList>
    </div>
  );
}

export default Dashboard;
