import { useState } from 'react';
import { isEmail, isEmpty } from '../validators';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import Rule from '../components/Rule';
import NavLink from '../components/NavLink';
import { useHistory } from 'react-router';

function LoginPortal(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    console.log('submitting');
    history.push('/dashboard');
  };

  return (
    <main>
      <Panel>
        <h1>Sign In</h1>
        <Form>
          <TextInput
            placeholder="Email"
            onChange={setEmail}
            validators={[isEmail]}
            value={email}
          />
          <TextInput
            password
            placeholder="Password"
            onChange={setPassword}
            validators={[isEmpty]}
            value={password}
          />
          <Button block submit onClick={onSubmit}>
            Sign In
          </Button>
        </Form>
        <NavLink to="/reset-password">Forgot your password?</NavLink>
        <Rule />
        <NavLink to="/register">No account? Register here.</NavLink>
      </Panel>
    </main>
  );
}

export default LoginPortal;
