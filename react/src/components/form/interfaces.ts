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
}

export interface IInitialState {
  invalidName: string;
  invalidData: string;
  submitButtonActive: boolean;
  isValid: boolean;
  cardCollection: FormCard[];
}
