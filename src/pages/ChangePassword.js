import React, { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import Form from '../components/Form';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';
import {
  isValid,
  minLength,
  containsNumbers,
  containsSpecialChars,
  isEmpty,
} from '../validation';
import useField from '../hooks/useField';

function ChangePassword() {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [
    newPassword,
    setNewPassword,
    newPasswordError,
    setNewPasswordError,
  ] = useField();
  const [
    confirmPassword,
    setConfirmPassword,
    confPwError,
    setConfPwError,
  ] = useField();

  function updatePassword() {
    if (confirmPassword !== newPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }

    const emptyFields = [confirmPassword, newPassword].some((val) =>
      isEmpty(val)
    );
    const errorState = [confPwError, newPasswordError].some(
      (val) => val !== false
    );
    if (emptyFields || errorState) {
      console.log('error');
      return;
    }

    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <>
      <ToolBar>
        <Button flat link to="/settings">
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
            rules={[
              isValid,
              minLength(6),
              containsNumbers,
              containsSpecialChars,
            ]}
            errorState={setNewPasswordError}
          />
          <TextInput
            block
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            rules={[
              isValid,
              minLength(6),
              containsNumbers,
              containsSpecialChars,
            ]}
            errorState={setConfPwError}
          />
          {!passwordsMatch && (
            <Paragraph danger small>
              Passwords must match
            </Paragraph>
          )}
          <Button block flat onClick={updatePassword}>
            Save
          </Button>
        </Form>
      </Panel>
    </>
  );
}

export default ChangePassword;
