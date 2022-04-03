import React from 'react';

interface Props {
  selectRef: React.RefObject<HTMLSelectElement>;
}

export const Select: React.FC<Props> = ({ selectRef }) => {
  return (
    <select name="country" id="country" ref={selectRef}>
      <option value="Belarus">Belarus</option>
      <option value="Belarus">Russia</option>
      <option value="Belarus">Ukrain</option>
      <option value="Belarus">Poland</option>
      <option value="Belarus">Another country</option>
    </select>
  );
};
