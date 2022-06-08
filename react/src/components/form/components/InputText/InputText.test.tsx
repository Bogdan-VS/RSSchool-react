import { render, screen, fireEvent } from '@testing-library/react';

import { InputText } from './InputText';

const inputTextData = {
  register: {
    name: 'name',
  },
  errors: {
    firstname: { message: 'Message' },
  },
};

describe('InputText', () => {
  const testInvalidName = 'Message';

  beforeEach(() => {
    render(
      <InputText
        register={inputTextData.register}
        errors={inputTextData.errors}
      />
    );
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
