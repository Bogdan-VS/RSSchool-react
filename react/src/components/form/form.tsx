import React from 'react';
import { Component } from 'react';
import { Card } from './components/Card';
import { InputText } from './components/InputText';
import { InputData } from './components/InputData';
import { Select } from './components/Select/Select';
import { InputCheckbox } from './components/InputCheckbox';
import { InputRadio } from './components/InputRadio';
import { FormCard, IInitialState } from './interfaces';
import { validate } from './utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export class Form extends Component<Props, IInitialState> {
  state: IInitialState = {
    invalidName: '',
    invalidData: '',
    invalidRadio: '',
    submitButtonActive: false,
    isValid: false,
    inputRadioValue: '',
    cardCollection: [],
  };

  inputRef: React.RefObject<HTMLInputElement>;
  inputDataRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  inputCheckboxRef: React.RefObject<HTMLInputElement>;
  inputRadioMaleRef: React.RefObject<HTMLInputElement>;
  inputRadioFemaleRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputDataRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
    this.inputRadioMaleRef = React.createRef();
    this.inputRadioFemaleRef = React.createRef();
  }

  inputSubmitRef = React.createRef<HTMLInputElement>();

  checkValidate = () => {
    const [invalidName, invalidData, invalidRadio] = validate(
      this.inputDataRef,
      this.inputRef,
      this.state.inputRadioValue
    );

    if (invalidName || invalidData || invalidRadio) {
      this.setState({
        invalidName,
        invalidData,
        invalidRadio,
        submitButtonActive: false,
      });
      return false;
    }

    return true;
  };

  getValueInputRadio = (value: string) => {
    this.setState({ inputRadioValue: value });
  };

  handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = this.checkValidate();

    if (isValid) {
      this.setState({
        invalidName: '',
        invalidData: '',
        invalidRadio: '',
        isValid: true,
      });
      this.setState(({ cardCollection }) => {
        const card: FormCard = {
          name: this.inputRef.current!.value,
          data: this.inputDataRef.current!.value,
          select: this.selectRef.current!.value,
          checkbox: this.inputCheckboxRef.current!.checked ? 'Ready' : '',
          radio: this.state.inputRadioValue,
        };
        const newArr = [...cardCollection, card];

        return {
          cardCollection: newArr,
        };
      });
    }
  };

  render() {
    const {
      submitButtonActive,
      invalidName,
      isValid,
      cardCollection,
      invalidData,
      invalidRadio,
    } = this.state;

    const cards = cardCollection.map(
      ({ name, data, select, checkbox, radio }, index) => {
        return (
          <Card
            key={index}
            isValid={isValid}
            name={name}
            data={data}
            select={select}
            checkbox={checkbox}
            radio={radio}
          />
        );
      }
    );

    return (
      <form
        onSubmit={this.handlerSubmit}
        onChange={() => this.setState({ submitButtonActive: true })}
      >
        <InputText inputRef={this.inputRef} invalidName={invalidName} />
        <InputData inputDataRef={this.inputDataRef} invalidData={invalidData} />
        <Select selectRef={this.selectRef} />
        <InputCheckbox inputCheckboxRef={this.inputCheckboxRef} />
        <InputRadio
          inputRadioMaleRef={this.inputRadioMaleRef}
          inputRadioFemaleRef={this.inputRadioFemaleRef}
          currentValue={this.getValueInputRadio}
          invalidRadio={invalidRadio}
        />
        <input
          type="submit"
          value="Submit"
          id="form-submit"
          ref={this.inputSubmitRef}
          disabled={!submitButtonActive}
        />
        <div>{cards}</div>
      </form>
    );
  }
}
