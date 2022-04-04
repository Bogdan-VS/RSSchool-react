import React from 'react';

import styles from './InputDate.module.scss';

const { inputWrapper, title } = styles;

interface Props {
  inputDataRef: React.RefObject<HTMLInputElement>;
  invalidData: string;
}

export const InputDate: React.FC<Props> = ({ inputDataRef, invalidData }) => {
  return (
    <label className={title} htmlFor="date">
      Enter your birthday
      <input
        className={inputWrapper}
        type="date"
        name="date"
        id="date"
        ref={inputDataRef}
      />
      <div style={{ color: 'red' }}>{invalidData}</div>
    </label>
  );
};
