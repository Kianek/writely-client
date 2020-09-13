import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Panel from '../components/Panel';
import Form from '../components/Form';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import HorizontalRule from '../components/HorizontalRule';

const linkStyles = {
  color: '#7a7d7d',
  marginBottom: '0.5rem',
  textDecoration: 'none',
};

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Panel>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <TextInput
            block
            placeholder="Email"
            onChange={setEmail}
            value={email}
          />
          <TextInput
            block
            type="password"
            placeholder="Password"
            onChange={setPassword}
            value={password}
          />
          <Button block outline onClick={handleSubmit}>
            Sign In
          </Button>
        </Form>
        <HorizontalRule />
        <Link style={linkStyles} to="/register">
          No account? Sign up now!
        </Link>
      </Panel>
    </>
  );
}

export default SignIn;
