import { render, screen } from '@testing-library/react';
import JournalItem from '.';

describe('JournalItem', () => {
  test('renders successfully', () => {
    const journal = {
      id: 1,
      title: 'My Journal',
    };
    render(
      <JournalItem
        journal={journal}
        editHandler={() => {}}
        deleteHandler={() => {}}
      />
    );

    expect(screen.getByTestId('journal-item'));
  });
});
