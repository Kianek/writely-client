import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import JournalList from '../components/JournalList';
import Journal from '../components/Journal';
import Modal from '../components/Modal';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';
import mockJournals from '../data/mock-journals';
import '../styles/_dashboard.scss';

function Dashboard() {
  const [showModal, setShowModal] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [journals, setJournals] = useState(
    mockJournals.map((data) => <Journal key={data.id} journal={data} />)
  );

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function addJournal() {
    setShowModal(false);
  }

  function updateJournal() {}

  function deleteJournal() {}

  return (
    <div id="dashboard">
      {showModal && (
        <Modal onConfirm={addJournal} onCancel={() => setShowModal(false)}>
          create journal
        </Modal>
      )}
      <ToolBar right>
        <Button flat info toggled={editMode} onClick={toggleEditMode}>
          <i className="fas fa-edit" />
        </Button>
        <Button flat success>
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
