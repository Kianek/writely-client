import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '.';

const getModal = (func1, func2) => {
  return (
    <Modal
      heading="Testing"
      message="moar testing"
      onConfirm={func1}
      onCancel={func2}
    >
      Stuff
    </Modal>
  );
};

describe('Modal', () => {
  test('renders successfully', () => {
    const func = jest.fn();
    render(getModal(func, func));

    expect(screen.getByText('Stuff')).toBeInTheDocument();
  });

  test('onConfirm and onCancel register click events', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(getModal(onConfirm, onCancel));

    const confirm = screen.getByText('OK');
    userEvent.click(confirm);

    const cancel = screen.getByText('Cancel');
    userEvent.click(cancel);

    expect(onConfirm).toBeCalledTimes(1);
    expect(onCancel).toBeCalledTimes(1);
  });
});
