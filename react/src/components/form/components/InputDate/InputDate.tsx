import React from 'react';
import { Message } from 'react-hook-form';

import styles from './InputDate.module.scss';

const { inputWrapper, title } = styles;

type UseFormProps = {
  register: {
    name: string;
  };
  errors: {
    date?:
      | {
          message?: Message;
        }
      | undefined;
    message?: Message;
  };
};

export const InputDate: React.FC<UseFormProps> = ({ register, errors }) => {
  return (
    <label className={title} htmlFor="date">
      Enter your birthday
      <input className={inputWrapper} type="date" id="date" {...register} />
      <div style={{ color: 'red' }}>{errors.date?.message}</div>
    </label>
  );
};
