import React from 'react';
import { Message } from 'react-hook-form';

import styles from './InputRadio.module.scss';

const { mainTitle, title, inputWrapper } = styles;

type inputRadioProps = {
  register: {
    name: string;
  };
  errors: {
    gender?:
      | {
          message?: Message;
        }
      | undefined;
    message?: Message;
  };
};

export const InputRadio: React.FC<inputRadioProps> = ({ register, errors }) => {
  return (
    <div>
      <div className={mainTitle}>Select your gender</div>
      <label className={title} htmlFor="male">
        Male
        <input
          className={inputWrapper}
          type="radio"
          id="male"
          value="Male"
          {...register}
        />
      </label>
      <label className={title} htmlFor="female">
        Female
        <input
          className={inputWrapper}
          type="radio"
          id="female"
          value="Female"
          {...register}
        />
      </label>
      <div style={{ color: 'red' }}>
        {errors.gender && errors.gender.message}
      </div>
    </div>
  );
};
