import React from 'react';

interface Props {
  inputDataRef: React.RefObject<HTMLInputElement>;
  invalidData: string;
}

export const InputData: React.FC<Props> = ({ inputDataRef, invalidData }) => {
  return (
    <label htmlFor="date">
      <input type="date" name="date" id="name" ref={inputDataRef} />
      <div style={{ color: 'red' }}>{invalidData}</div>
    </label>
  );
};
