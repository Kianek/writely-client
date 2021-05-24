import { render, screen } from '@testing-library/react';
import TextArea from '.';

describe('TextArea', () => {
  test('renders successfully', () => {
    render(<TextArea placeholder="Text" value="text" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('Text')).toBeInTheDocument();
  });
});
