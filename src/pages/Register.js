import React, { useState } from 'react';
import Panel from '../components/Panel';
import Paragraph from '../components/Paragraph';
import Form from '../components/Form';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import HorizontalRule from '../components/HorizontalRule';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegistration() {
    [
      setUsername,
      setEmail,
      setFirstName,
      setLastName,
      setPassword,
      setConfirmPassword,
    ].forEach((cb) => cb(''));
    console.log('fn call');
  }

  return (
    <>
      <Panel>
        <h2>Register</h2>
        <Form onSubmit={handleRegistration}>
          <TextInput
            block
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <TextInput
            block
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <TextInput
            block
            placeholder="First Name"
            value={firstName}
            onChange={setFirstName}
          />
          <TextInput
            block
            placeholder="Last Name"
            value={lastName}
            onChange={setLastName}
          />
          <HorizontalRule />
          <Paragraph danger small>
            Please include at least one capital letter, one number, and one
            special character (e.g. !?@#)
          </Paragraph>
          <TextInput
            block
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <TextInput
            block
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <Button block onClick={handleRegistration} outline type="submit">
            Sign Up
          </Button>
        </Form>
      </Panel>
    </>
  );
}

export default Register;
