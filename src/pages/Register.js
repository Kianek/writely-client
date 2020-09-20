import React, { useState } from 'react';
import Panel from '../components/Panel';
import Paragraph from '../components/Paragraph';
import Form from '../components/Form';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import HorizontalRule from '../components/HorizontalRule';
import {
  isEmpty,
  isValid,
  isEmail,
  minLength,
  containsSpecialChars,
  containsNumbers,
} from '../validation';
import useField from '../hooks/useField';

function Register() {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [username, setUsername, usernameError, setUsernameError] = useField();
  const [email, setEmail, emailError, setEmailError] = useField();
  const [
    firstName,
    setFirstName,
    firstNameError,
    setFirstNameError,
  ] = useField();
  const [lastName, setLastName, lastNameError, setLastNameError] = useField();
  const [password, setPassword, passwordError, setPasswordError] = useField();
  const [
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useField();

  function handleRegistration() {
    if (confirmPassword !== password) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }

    const errorState = [
      usernameError,
      emailError,
      firstNameError,
      lastNameError,
      passwordError,
      confirmPasswordError,
    ].some((val) => val !== false);
    const emptyFields = [
      username,
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    ].some((val) => isEmpty(val));
    if (emptyFields || errorState) {
      console.log('error');
      return;
    }

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
            rules={[isValid]}
            errorState={setUsernameError}
          />
          <TextInput
            block
            placeholder="Email"
            value={email}
            onChange={setEmail}
            rules={[isValid, isEmail]}
            errorState={setEmailError}
          />
          <TextInput
            block
            placeholder="First Name"
            value={firstName}
            onChange={setFirstName}
            rules={[isValid]}
            errorState={setFirstNameError}
          />
          <TextInput
            block
            placeholder="Last Name"
            value={lastName}
            onChange={setLastName}
            rules={[isValid]}
            errorState={setLastNameError}
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
            rules={[
              isValid,
              minLength(6),
              containsSpecialChars,
              containsNumbers,
            ]}
            errorState={setPasswordError}
          />
          <TextInput
            block
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            rules={[
              isValid,
              minLength(6),
              containsSpecialChars,
              containsNumbers,
            ]}
            errorState={setConfirmPasswordError}
          />
          {!passwordsMatch && (
            <Paragraph danger small>
              Passwords must match
            </Paragraph>
          )}
          <Button block onClick={handleRegistration} outline type="submit">
            Sign Up
          </Button>
        </Form>
      </Panel>
    </>
  );
}

export default Register;
