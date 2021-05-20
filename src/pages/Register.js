import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import Rule from '../components/Rule';
import TextInput from '../components/TextInput';

function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <main>
      <Panel>
        <h1>Create Account</h1>
        <Form>
          <TextInput
            placeholder="First Name"
            onChange={setFirstName}
            value={firstName}
          />
          <TextInput
            placeholder="Last Name"
            onChange={setLastName}
            value={lastName}
          />
          <TextInput placeholder="Email" onChange={setEmail} value={email} />
          <Rule />
          <TextInput
            password
            placeholder="Password"
            onChange={setPassword}
            value={password}
          />
          <TextInput
            password
            placeholder="Confirm Password"
            onChange={setConfirmPassword}
            value={confirmPassword}
          />
          <Button block submit onClick={onSubmit}>
            Create
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default Register;
