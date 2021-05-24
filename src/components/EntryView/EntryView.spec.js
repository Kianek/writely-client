import { render } from '@testing-library/react';
import EntryView from '.';

describe('EntryView', () => {
  test('renders successfully', () => {
    const entry = {
      title: 'Title',
      tags: 'one,two,three',
      body: 'Stuff',
    };
    render(<EntryView entry={entry} />);
  });
});
