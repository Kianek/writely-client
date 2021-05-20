import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordGroup, { getPasswordObject } from '.';

describe('getPasswordObject', () => {
  let pwObj;
  beforeEach(() => {
    pwObj = getPasswordObject();
  });

  test('object returned with defined fields', () => {
    expect(typeof pwObj.text).toBe('string');
    expect(typeof pwObj.handler).toBe('function');
  });

  test('handler should update password text', () => {
    const text = 'Password123!';
    pwObj.handler(text);

    expect(pwObj.text).toBe(text);
  });
});

describe('PasswordGroup', () => {
  test('renders successfully', () => {
    let errors = [];
    let pw1 = getPasswordObject();
    let pw2 = getPasswordObject();
    render(
      <PasswordGroup errors={errors} password={pw1} confirmPassword={pw2} />
    );

    expect(screen.getByTestId('password-group')).toBeInTheDocument();
  });
});
