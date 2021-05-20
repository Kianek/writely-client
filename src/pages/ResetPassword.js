import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import PasswordGroup from '../components/PasswordGroup';

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
        <h1>Reset Password</h1>
        <Form>
          <PasswordGroup
            errors={{ errors: errors, handler: setErrors }}
            password={{ text: password, handler: setPassword }}
            confirmPassword={{
              text: confirmPassword,
              handler: setConfirmPassword,
            }}
          />
          <Button block submit onClick={onSubmit}>
            Reset
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default ResetPassword;
