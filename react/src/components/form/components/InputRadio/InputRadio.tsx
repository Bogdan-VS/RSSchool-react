import React, { ChangeEvent } from 'react';

import styles from './InputRadio.module.scss';

const { mainTitle, title, inputWrapper } = styles;

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
      <div className={mainTitle}>Select your gender</div>
      <label className={title} htmlFor="male">
        Male
        <input
          className={inputWrapper}
          type="radio"
          name="gender"
          id="male"
          ref={inputRadioMaleRef}
          value="Male"
        />
      </label>
      <label className={title} htmlFor="female">
        Female
        <input
          className={inputWrapper}
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
