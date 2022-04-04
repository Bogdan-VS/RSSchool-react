import React, { ChangeEvent } from 'react';

interface Props {
  inputRadioMaleRef: React.RefObject<HTMLInputElement>;
  inputRadioFemaleRef: React.RefObject<HTMLInputElement>;
  currentValue(value: string): void;
  invalidRadio: string;
}

export const InputRadio: React.FC<Props> = ({
  inputRadioFemaleRef,
  inputRadioMaleRef,
  currentValue,
  invalidRadio,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    currentValue(e.target.value);
  };

  return (
    <div onChange={onChange}>
      <label htmlFor="male">
        <input
          type="radio"
          name="gender"
          id="male"
          ref={inputRadioMaleRef}
          value="Male"
        />
      </label>
      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          id="female"
          ref={inputRadioFemaleRef}
          value="Female"
        />
      </label>
      <div style={{ color: 'red' }}>{invalidRadio}</div>
    </div>
  );
};
