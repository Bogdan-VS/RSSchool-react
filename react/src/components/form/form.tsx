import React, { ChangeEvent, ProfilerProps, RefObject } from 'react';
import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export class Form extends Component<{}, { name: string }> {
  name: RefObject<HTMLInputElement>;

  constructor(props: ProfilerProps) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.name = React.createRef();
  }

  handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.name.current?.value);
    const submitBtn = document.getElementById('name') as HTMLInputElement;

    submitBtn.setAttribute('minlength', '5');
  }

  onText = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const submitBtn = document.getElementById('form-submit') as HTMLInputElement;

      submitBtn.removeAttribute('disabled');
    }
  };

  disabledSubmit = () => {
    const submitBtn = document.getElementById('form-submit') as HTMLInputElement;

    submitBtn.setAttribute('disabled', 'disabled');
  };

  componentDidMount = () => {
    this.disabledSubmit();
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" id="name" ref={this.name} onChange={this.onText} />
        </label>
        <input type="submit" value="Submit" id="form-submit" />
      </form>
    );
  }
}
