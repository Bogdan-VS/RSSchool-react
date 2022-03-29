import React, { ProfilerProps, RefObject } from 'react';
import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export default class Form extends Component<{}, { name: string }> {
  name: RefObject<HTMLInputElement>;

  constructor(props: ProfilerProps) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.name = React.createRef();
  }

  handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.name.current?.value);
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" id="name" ref={this.name} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
