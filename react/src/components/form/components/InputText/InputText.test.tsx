import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { InputText } from './InputText';

describe('InputText', () => {
  const testInvalidName = 'test invalid name';
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  beforeEach(() => {
    render(<InputText invalidName={testInvalidName} inputRef={inputRef} />);
  });

  it('Should contain correct label', () => {
    expect(screen.getByText('Enter your name')).toBeVisible();
  });

  it('Should contain correct label', () => {
    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '123' } });

    expect(input.value).toBe('123');
  });

  it('Should render passed "invalidName"', () => {
    expect(screen.getByText(testInvalidName)).toBeVisible();
  });
});
