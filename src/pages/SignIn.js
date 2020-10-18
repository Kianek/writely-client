/** @jsxFrag Fragment */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Panel from '../components/Panel';
import Form from '../components/Form';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import HorizontalRule from '../components/HorizontalRule';
import { isEmail, isValid, isEmpty } from '../validation';
import useField from '../hooks/useField';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../data/users/usersSlice';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const [authError, setAuthError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail, emailError, setEmailError] = useField();
  const [password, setPassword, passwordError, setPasswordError] = useField();
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const errorState = emailError || passwordError;
    const emptyFields = [email, password].some((val) => isEmpty(val));
    if (emptyFields || errorState) {
      return;
    }

    setLoading(true);
    dispatch(signInAsync({ email, password, rememberMe }))
      .then(() => {
        setLoading(false);
        setEmail('');
        setPassword('');
        setRememberMe(false);
        history.replace('/dashboard');
      })
      .catch(() => setAuthError('Invalid email or password'));
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
          <Button
            block
            outline
            disabled={loading}
            loading={loading}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          {authError && (
            <Paragraph danger small>
              {authError}
            </Paragraph>
          )}
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
