import { useState } from 'react';
import { isEmail, isEmpty } from '../validators';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import Rule from '../components/Rule';
import NavLink from '../components/NavLink';
import useNavigateTo from '../hooks/useNavigateTo';
import { useHistory } from 'react-router';
import Padding from '../components/Padding';

function LoginPortal() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    setLoading(false);
    history.push('/dashboard');
  }

  const onSubmit = (e) => {
    setLoading(true);

    setTimeout(submit, 1000);
  };

  return (
    <main>
      <Panel>
        <h1>Sign In</h1>
        <Form onSubmit={onSubmit}>
          <TextInput
            placeholder="Email"
            onChange={setEmail}
            validators={[isEmail]}
            value={email}
          />
          <Padding amount="0.25em" />
          <TextInput
            password
            placeholder="Password"
            onChange={setPassword}
            validators={[isEmpty]}
            value={password}
          />
          <Padding amount="0.25em" />
          <Button block loading={loading} submit>
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
