import React from 'react';

interface Props {
  inputCheckboxRef: React.RefObject<HTMLInputElement>;
}

export const InputCheckbox: React.FC<Props> = ({ inputCheckboxRef }) => {
  return (
    <label htmlFor="checkbox">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        ref={inputCheckboxRef}
      />
    </label>
  );
};
