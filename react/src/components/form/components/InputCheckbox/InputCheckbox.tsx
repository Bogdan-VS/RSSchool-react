import React from 'react';
import { Message } from 'react-hook-form';

import styles from './InputCheckbox.module.scss';

const { inputWrapper, title } = styles;

type inputCheckboxProps = {
  register: {
    name: string;
  };
};

export const InputCheckbox: React.FC<inputCheckboxProps> = ({ register }) => {
  return (
    <label className={title} htmlFor="checkbox">
      Do you want to get newsletter on your mail?
      <input
        className={inputWrapper}
        type="checkbox"
        id="checkbox"
        {...register}
      />
    </label>
  );
};
