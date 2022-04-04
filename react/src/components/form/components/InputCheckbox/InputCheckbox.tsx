import React from 'react';

import styles from './InputCheckbox.module.scss';

const { inputWrapper, title } = styles;

interface Props {
  inputCheckboxRef: React.RefObject<HTMLInputElement>;
}

export const InputCheckbox: React.FC<Props> = ({ inputCheckboxRef }) => {
  return (
    <label className={title} htmlFor="checkbox">
      Do you want to get newsletter on your mail?
      <input
        className={inputWrapper}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        ref={inputCheckboxRef}
      />
    </label>
  );
};
