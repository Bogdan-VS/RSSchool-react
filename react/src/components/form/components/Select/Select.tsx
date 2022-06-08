import React from 'react';

import styles from './Select.module.scss';

const { title, wrapper, select } = styles;

type selectProps = {
  register: {
    name: string;
  };
};

export const Select: React.FC<selectProps> = ({ register }) => {
  return (
    <div className={wrapper}>
      <p className={title}>Select country of residence</p>
      <select className={select} id="country" {...register}>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="Another country">Another country</option>
      </select>
    </div>
  );
};
