import { render, screen } from '@testing-library/react';
import JournalItemControls from '.';

describe('JournalItemControls', () => {
  test('renders successfully', () => {
    const func = jest.fn();
    render(
      <JournalItemControls
        editHandler={func}
        editMode={false}
        toggleEditMode={func}
        deleteHandler={func}
      />
    );

    expect(screen.getByTestId('controls')).toBeInTheDocument();
  });
});
