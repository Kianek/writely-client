import { render, screen } from '@testing-library/react';
import TextInputUnderline from '.';

describe('TextInputUnderline', () => {
  test('renders successfully', () => {
    render(<TextInputUnderline active={false} errors={[]} valid={true} />);

    expect(screen.getByTestId('underline')).toBeInTheDocument();
  });
});
