import React, { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function updatePassword() {
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <>
      <ToolBar>
        <Button link to="/settings">
          <i className="fas fa-arrow-left" /> Settings
        </Button>
      </ToolBar>
      <Panel>
        <h3>Change Password</h3>
        <Form>
          <TextInput
            block
            placeholder="New Password"
            value={newPassword}
            onChange={setNewPassword}
          />
          <TextInput
            block
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <Button block flat onClick={updatePassword}>
            Save
          </Button>
        </Form>
      </Panel>
    </>
  );
}

export default ChangePassword;
