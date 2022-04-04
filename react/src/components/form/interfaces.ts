export interface IChangeText {
  changeText: IInputText;
  text?: string;
}

export interface OnInput {
  onInput: IInputText;
}

export interface IInputText {
  text: string;
  getInput?: string;
}

export interface FormCard {
  name: string;
  data: string;
  select: string;
  checkbox: string;
  radio: string;
  file: string;
}

export interface IInitialState {
  invalidName: string;
  invalidData: string;
  invalidRadio: string;
  submitButtonActive: boolean;
  isValid: boolean;
  inputRadioValue: string;
  cardCollection: FormCard[];
}
