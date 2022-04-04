import React from 'react';
import { Component } from 'react';
import { Card } from './components/Card';
import { InputText } from './components/InputText';
import { InputData } from './components/InputData';
import { Select } from './components/Select/Select';
import { InputCheckbox } from './components/InputCheckbox';
import { FormCard, IInitialState } from './interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export class Form extends Component<Props, IInitialState> {
  state: IInitialState = {
    invalidName: '',
    invalidData: '',
    submitButtonActive: false,
    isValid: false,
    cardCollection: [],
  };

  inputRef: React.RefObject<HTMLInputElement>;
  inputDataRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  inputCheckboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputDataRef = React.createRef();
    this.selectRef = React.createRef();
    this.inputCheckboxRef = React.createRef();
  }

  inputSubmitRef = React.createRef<HTMLInputElement>();

  validate = () => {
    let invalidName = '';
    let invalidData = '';

    const date = new Date(this.inputDataRef.current!.value);

    if (this.inputRef.current!.value.length < 5) {
      invalidName = 'length of name must be more than 5';
    }

    if (
      date.getFullYear() >= 2021 ||
      date.getFullYear() <= 1960 ||
      String(date) === 'Invalid Date'
    ) {
      invalidData = 'the date must be between 1960 - 2021';
    }

    if (invalidName || invalidData) {
      this.setState({
        invalidName,
        invalidData,
        submitButtonActive: false,
      });
      return false;
    }

    return true;
  };

  handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.setState({ invalidName: '', invalidData: '', isValid: true });
      this.setState(({ cardCollection }) => {
        const card: FormCard = {
          name: this.inputRef.current!.value,
          data: this.inputDataRef.current!.value,
          select: this.selectRef.current!.value,
          checkbox: this.inputCheckboxRef.current!.checked ? 'Ready' : '',
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
    } = this.state;

    const cards = cardCollection.map(
      ({ name, data, select, checkbox }, index) => {
        return (
          <Card
            key={index}
            isValid={isValid}
            name={name}
            data={data}
            select={select}
            checkbox={checkbox}
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
