import React, { Component } from 'react';

import { Card } from './components/Card';
import { InputText } from './components/InputText';
import { InputDate } from './components/InputDate';
import { Select } from './components/Select/Select';
import { InputCheckbox } from './components/InputCheckbox';
import { InputRadio } from './components/InputRadio';
import { InputFile } from './components/InputFile';

import { FormCard, IInitialState } from './interfaces';
import { clearForm, validate } from './utils';
import styles from './Form.module.scss';

const { wrapper, formContainer, cardContainer } = styles;

export class Form extends Component<unknown, IInitialState> {
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
  inputFileRef: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);
    this.inputRef = React.createRef();
    this.inputDataRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
    this.inputRadioMaleRef = React.createRef();
    this.inputRadioFemaleRef = React.createRef();
    this.inputFileRef = React.createRef();
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

    const file = this.inputFileRef.current!.files as FileList;
    let url =
      'https://cdn.dribbble.com/users/20883/screenshots/2381093/evgeniy-artsebasov-developer-icon.png';
    if (file.length !== 0) {
      url = URL.createObjectURL(file[0]);
    }

    if (isValid) {
      this.setState({
        invalidName: '',
        invalidData: '',
        invalidRadio: '',
        isValid: true,
      });
      this.setState(
        ({ cardCollection }) => {
          const card: FormCard = {
            name: this.inputRef.current!.value,
            data: this.inputDataRef.current!.value,
            select: this.selectRef.current!.value,
            checkbox: this.inputCheckboxRef.current!.checked ? 'Ready' : '',
            radio: this.state.inputRadioValue,
            file: url,
          };
          const newArr = [...cardCollection, card];

          return {
            cardCollection: newArr,
          };
        },
        () =>
          clearForm(
            this.inputRef,
            this.inputDataRef,
            this.selectRef,
            this.inputCheckboxRef,
            this.inputRadioMaleRef,
            this.inputRadioFemaleRef,
            this.inputFileRef
          )
      );
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
      ({ name, data, select, checkbox, radio, file }, index) => {
        return (
          <Card
            key={index}
            isValid={isValid}
            name={name}
            data={data}
            select={select}
            checkbox={checkbox}
            radio={radio}
            file={file}
          />
        );
      }
    );

    return (
      <div className={wrapper}>
        <form
          className={formContainer}
          onSubmit={this.handlerSubmit}
          onChange={() => this.setState({ submitButtonActive: true })}
        >
          <InputText inputRef={this.inputRef} invalidName={invalidName} />
          <InputDate
            inputDataRef={this.inputDataRef}
            invalidData={invalidData}
          />
          <Select selectRef={this.selectRef} />
          <InputCheckbox inputCheckboxRef={this.inputCheckboxRef} />
          <InputRadio
            inputRadioMaleRef={this.inputRadioMaleRef}
            inputRadioFemaleRef={this.inputRadioFemaleRef}
            currentValue={this.getValueInputRadio}
            invalidRadio={invalidRadio}
          />
          <InputFile inputFileRef={this.inputFileRef} />
          <input
            type="submit"
            value="Submit"
            id="form-submit"
            ref={this.inputSubmitRef}
            disabled={!submitButtonActive}
          />
        </form>
        <div className={cardContainer}>{cards}</div>
      </div>
    );
  }
}
