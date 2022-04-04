import React from 'react';

import styles from './Select.module.scss';

const { title, wrapper, select } = styles;

interface Props {
  selectRef: React.RefObject<HTMLSelectElement>;
}

export const Select: React.FC<Props> = ({ selectRef }) => {
  return (
    <div className={wrapper}>
      <p className={title}>Select country of residence</p>
      <select className={select} name="country" id="country" ref={selectRef}>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukrain">Ukrain</option>
        <option value="Poland">Poland</option>
        <option value="Another country">Another country</option>
      </select>
    </div>
  );
};
