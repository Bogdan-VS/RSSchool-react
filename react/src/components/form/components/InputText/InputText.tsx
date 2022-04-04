import React from 'react';

import styles from './InputText.module.scss';

const { inputWrapper, title } = styles;

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  invalidName: string;
}

export const InputText: React.FC<Props> = ({ invalidName, inputRef }) => {
  return (
    <label className={title} htmlFor="name">
      Enter your name
      <input
        className={inputWrapper}
        type="text"
        name="name"
        id="name"
        ref={inputRef}
      />
      <div style={{ color: 'red' }}>{invalidName}</div>
    </label>
  );
};
