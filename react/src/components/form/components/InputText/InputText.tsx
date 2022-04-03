import React from 'react';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  invalidName: string;
}

export const InputText: React.FC<Props> = ({ invalidName, inputRef }) => {
  return (
    <label htmlFor="name">
      <input type="text" name="name" id="name" ref={inputRef} />
      <div style={{ color: 'red' }}>{invalidName}</div>
    </label>
  );
};
