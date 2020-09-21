import React, { useState } from 'react';
import Modal from '../components/Modal';
import HorizontalRule from '../components/HorizontalRule';
import Panel from '../components/Panel';
import ToolBar from '../components/ToolBar';
import Button from '../components/Button';

function Settings() {
  const [showModal, setShowModal] = useState(false);

  function deleteAccount() {
    setShowModal(false);
  }

  function downloadUserData() {}

  return (
    <>
      {showModal && (
        <Modal
          heading="Caution"
          onConfirm={deleteAccount}
          onCancel={() => setShowModal(false)}
        >
          Are you sure? This action cannot be undone.
        </Modal>
      )}
      <ToolBar left>
        <Button outline link to="/dashboard">
          <i className="fas fa-arrow-left" /> Dashboard
        </Button>
      </ToolBar>
      <Panel wide>
        <Button block outline link to="/change-password">
          Change Password
        </Button>
        <Button block outline onClick={downloadUserData}>
          Download Account Data
        </Button>
        <HorizontalRule />
        <Button block outline onClick={() => setShowModal(true)}>
          Delete Account
        </Button>
      </Panel>
    </>
  );
}

export default Settings;
