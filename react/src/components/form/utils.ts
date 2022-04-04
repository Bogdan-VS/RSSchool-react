export const validate = (
  inputDataRef: React.RefObject<HTMLInputElement>,
  inputRef: React.RefObject<HTMLInputElement>,
  inputRadioValue: string
) => {
  let invalidName = '';
  let invalidData = '';
  let invalidRadio = '';

  const date = new Date(inputDataRef.current!.value);

  if (inputRef.current!.value.length < 5) {
    invalidName = 'length of name must be more than 5';
  }

  if (
    date.getFullYear() >= 2021 ||
    date.getFullYear() <= 1960 ||
    String(date) === 'Invalid Date'
  ) {
    invalidData = 'the date must be between 1960 - 2021';
  }

  if (!inputRadioValue) {
    invalidRadio = 'you have to choose your gender';
  }

  return [invalidName, invalidData, invalidRadio];
};

export const clearForm = (
  inputRef: React.RefObject<HTMLInputElement>,
  inputDataRef: React.RefObject<HTMLInputElement>,
  selectRef: React.RefObject<HTMLSelectElement>,
  inputCheckboxRef: React.RefObject<HTMLInputElement>,
  inputRadioMaleRef: React.RefObject<HTMLInputElement>,
  inputRadioFemaleRef: React.RefObject<HTMLInputElement>,
  inputFileRef: React.RefObject<HTMLInputElement>
) => {
  inputRef.current!.value = '';
  inputDataRef.current!.value = '';
  selectRef.current!.value = '';
  inputCheckboxRef.current!.value = '';
  inputRadioMaleRef.current!.value = '';
  inputRadioFemaleRef.current!.value = '';
  inputFileRef.current!.files = null;
};
