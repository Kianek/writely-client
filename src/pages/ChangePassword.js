import Button from '../components/Button';
import Panel from '../components/Panel';
import PasswordGroup from '../components/PasswordGroup';
import ToolBar from '../components/ToolBar';
import { useState } from 'react';
import useNavigateTo from '../hooks/useNavigateTo';
import Form from '../components/Form';

function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => console.log('submit');

  return (
    <main>
      <Panel>
        <ToolBar left>
          <Button info onClick={useNavigateTo('/profile')}>
            <i className="fas fa-arrow-left" />
          </Button>
        </ToolBar>
        <Form onSubmit={onSubmit}>
          <h1>Change Password</h1>
          <PasswordGroup
            errors={{ errors, handler: setErrors }}
            password={{ text: password, handler: setPassword }}
            confirmPassword={{
              text: confirmPassword,
              handler: setConfirmPassword,
            }}
          />
          <Button block loading={loading} submit>
            Update Password
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default ChangePassword;
