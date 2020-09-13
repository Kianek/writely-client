import React, { useState } from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '../components/TextInput';

describe('TextInput', () => {
  it('should render', () => {
    const setText = jest.fn();
    let textValue = '';
    const { container } = render(
      <TextInput onChange={setText} value={textValue} />
    );

    expect(container).toBeTruthy();
  });
});
