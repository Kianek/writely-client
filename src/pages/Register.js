import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Padding from '../components/Padding';
import Panel from '../components/Panel';
import PasswordGroup from '../components/PasswordGroup';
import Rule from '../components/Rule';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';
import { setState } from '../utils';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  const onSubmit = () => {
    if (passwordErrors.length > 0) {
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
        <h1>Create Account</h1>
        <Form onSubmit={onSubmit}>
          <TextInput
            placeholder="First Name"
            onChange={setState(setFirstName)}
            value={firstName}
          />
          <Padding amount="0.25em" />
          <TextInput
            placeholder="Last Name"
            onChange={setState(setLastName)}
            value={lastName}
          />
          <Padding amount="0.25em" />
          <TextInput
            placeholder="Email"
            onChange={setState(setEmail)}
            value={email}
          />
          <Rule />
          <PasswordGroup
            errors={{
              errors: passwordErrors,
              handler: setPasswordErrors,
            }}
            password={{ text: password, handler: setState(setPassword) }}
            confirmPassword={{
              text: confirmPassword,
              handler: setState(setConfirmPassword),
            }}
          />
          <Button block submit disabled={passwordErrors.length > 0}>
            Register
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default Register;
