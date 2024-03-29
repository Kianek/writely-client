import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import PasswordGroup from '../components/PasswordGroup';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';
import { setState } from '../utils';

function ResetPassword() {
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => {
    if (errors.length > 0) {
      return;
    }

    console.log('submit');
  };

  return (
    <main>
      <Panel>
        <ToolBar left>
          <Button circle info onClick={useNavigateTo('/')}>
            <i className="fas fa-arrow-left" />
          </Button>
        </ToolBar>
        <h1>Reset Password</h1>
        <Form onSubmit={onSubmit}>
          <PasswordGroup
            errors={{ errors: errors, handler: setErrors }}
            password={{ text: password, handler: setState(setPassword) }}
            confirmPassword={{
              text: confirmPassword,
              handler: setState(setConfirmPassword),
            }}
          />
          <Button block submit>
            Reset
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default ResetPassword;
