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
import { isEmail, isValid, isEmpty } from '../validation';

const linkStyles = (theme) => css`
  color: ${theme.colors.darkGray};
  margin-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.info};
    text-decoration: underline;
  }
`;

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const errorState = emailError || passwordError;
    const emptyFields = [email, password].some((val) => isEmpty(val));
    if (emptyFields || errorState) {
      return;
    }

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
            errorState={setEmailError}
          />
          <TextInput
            block
            type="password"
            placeholder="Password"
            onChange={setPassword}
            value={password}
            rules={[isValid]}
            errorState={setPasswordError}
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
          <Button block outline onClick={handleSubmit}>
            Sign In
          </Button>
        </Form>
        <HorizontalRule />
        <Link css={linkStyles} to="/register">
          No account? Sign up now!
        </Link>
      </Panel>
    </Fragment>
  );
}

export default SignIn;
