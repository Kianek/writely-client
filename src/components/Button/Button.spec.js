import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button', () => {
  let eventHandler;

  beforeEach(() => {
    eventHandler = jest.fn();
  });

  afterEach(() => {
    eventHandler = null;
  });

  test('renders successfully', () => {
    render(<Button>Hover over me</Button>);

    expect(screen.getByText(/Hover over me/i)).toBeInTheDocument();
  });

  test('fires event handler', () => {
    render(<Button onClick={eventHandler}>Click me</Button>);
    screen.debug();

    const btn = screen.getByText('Click me');
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    expect(eventHandler).toBeCalledTimes(3);
  });

  test('has type submit', () => {
    render(
      <Button submit onClick={eventHandler}>
        Submit
      </Button>
    );

    const btn = screen.getByText('Submit');
    expect(btn).toHaveAttribute('type', 'submit');
  });

  test('invokes callback when used as type submit', () => {
    let submitEvent = jest.fn();
    render(
      <Button submit onClick={submitEvent}>
        Submit
      </Button>
    );

    const btn = screen.getByText('Submit');
    userEvent.click(btn);

    expect(submitEvent).toBeCalled();
  });

  test('should be disabled', () => {
    render(<Button disabled>Click me</Button>);

    const btn = screen.getByText('Click me');
    expect(btn).toHaveAttribute('disabled');
  });

  test('should have block class', () => {
    render(<Button block>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('block');
  });

  test('should have outline class', () => {
    render(<Button outline>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('outline');
  });

  test('should have flat class', () => {
    render(<Button flat>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('flat');
  });

  test('should have raised class', () => {
    render(<Button raised>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('raised');
  });

  test('should have danger class', () => {
    render(<Button danger>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('danger');
  });

  test('should have info class', () => {
    render(<Button info>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('info');
  });

  test('should have success class', () => {
    render(<Button success>Submit</Button>);

    expect(screen.getByText('Submit')).toHaveClass('success');
  });
});
