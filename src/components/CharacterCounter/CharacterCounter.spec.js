import { render } from '@testing-library/react';
import Counter from './index';

describe('CharacterCounter', () => {
  test('renders successfully', () => {
    const { getByTestId } = render(<Counter text={'blah'} />);

    expect(getByTestId('counter')).toBeInTheDocument();
  });

  test('displays character count', () => {
    let value = 'blah';
    const { getByTestId } = render(<Counter text={value} />);

    expect(getByTestId('counter')).toHaveTextContent(/4/i);
  });

  test('displays error message if too many characters', () => {
    const { getByTestId } = render(<Counter text="Blaaaaaah" max={5} />);

    expect(getByTestId('counter')).toHaveTextContent('Too many characters');
  });
});
