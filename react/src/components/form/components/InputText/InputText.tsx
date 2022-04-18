import React from 'react';
import { Message } from 'react-hook-form';

import styles from './InputText.module.scss';

const { inputWrapper, title } = styles;

type UseFormProps = {
  register: {
    name: string;
  };
  errors: {
    firstname?:
      | {
          message?: Message;
        }
      | undefined;
  };
};

export const InputText: React.FC<UseFormProps> = ({ register, errors }) => {
  return (
    <label className={title} htmlFor="name">
      Enter your name
      <input className={inputWrapper} type="text" id="name" {...register} />
      {errors.firstname && (
        <div style={{ color: 'red' }}>{errors.firstname.message}</div>
      )}
    </label>
  );
};
