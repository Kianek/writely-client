/** @jsxFrag Fragment */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Panel from '../components/Panel';
import Form from '../components/Form';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import HorizontalRule from '../components/HorizontalRule';
import { isEmail, isValid } from '../validation';

const linkStyles = {
  color: '#7a7d7d',
  marginBottom: '0.5rem',
  textDecoration: 'none',
};

function SignIn() {
  const [errorState, setErrorState] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }

  return (
    <Fragment>
      <Panel>
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <TextInput
            block
            placeholder="Email"
            onChange={setEmail}
            value={email}
            rules={[isValid, isEmail]}
            errorState={setErrorState}
          />
          <TextInput
            block
            type="password"
            placeholder="Password"
            onChange={setPassword}
            value={password}
            rules={[isValid]}
            errorState={setErrorState}
          />
          <div
            css={(theme) => css`
              ${theme.flex.row}
              align-items: center;
              label {
                color: ${theme.colors.darkGray};
                margin-right: 0.5rem;
              }
            `}
          >
            <label htmlFor="rememberMe">Remember Me</label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <Button disabled={errorState} block outline onClick={handleSubmit}>
            Sign In
          </Button>
        </Form>
        <HorizontalRule />
        <Link style={linkStyles} to="/register">
          No account? Sign up now!
        </Link>
      </Panel>
    </Fragment>
  );
}

export default SignIn;
