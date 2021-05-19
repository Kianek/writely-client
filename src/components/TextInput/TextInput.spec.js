import { render, screen } from '@testing-library/react';
import TextInput from '.';
import userEvent from '@testing-library/user-event';
import { isEmail } from '../../validators/validators';

describe('TextInput', () => {
  test('renders successfully', () => {
    render(<TextInput placeholder="Email" value="" />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  test('calls event handler on typing', () => {
    const jimEmail = 'jim@gmail.com';
    let email = '';
    let eventHandler = jest.fn((value) => {
      email += value;
    });
    render(
      <TextInput placeholder="Email" onChange={eventHandler} value={email} />
    );

    userEvent.type(screen.getByPlaceholderText('Email'), jimEmail);

    expect(eventHandler).toBeCalledTimes(jimEmail.length);
    expect(email).toBe(jimEmail);
  });

  test('displays errors from list of validators', () => {
    let email = '';
    let eventHandler = jest.fn((value) => {
      email += value;
    });
    render(
      <TextInput
        placeholder="Email"
        onChange={eventHandler}
        validators={[isEmail]}
        value={email}
      />
    );

    userEvent.type(screen.getByPlaceholderText('Email'), 'jim@someplace');

    expect(screen.getByTestId('errors')).toBeInTheDocument();
  });
});
