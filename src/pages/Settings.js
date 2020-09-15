import React from 'react';
import Modal from '../components/Modal';
import HorizontalRule from '../components/HorizontalRule';
import Panel from '../components/Panel';
import ToolBar from '../components/ToolBar';
import Button from '../components/Button';

function Settings() {
  function downloadUserData() {}

  return (
    <>
      <ToolBar left>
        <Button flat link to="/dashboard">
          <i className="fas fa-arrow-left" /> Dashboard
        </Button>
      </ToolBar>
      <Panel>
        <Button block flat link to="/change-password">
          Change Password
        </Button>
        <Button block flat onClick={downloadUserData}>
          Download Account Data
        </Button>
        <HorizontalRule />
        <Button block flat>
          Delete Account
        </Button>
      </Panel>
    </>
  );
}

export default Settings;
