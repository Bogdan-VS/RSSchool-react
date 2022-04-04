import { Component } from 'react';

export class Card extends Component<{
  name: string;
  data: string;
  select: string;
  checkbox: string;
  isValid: boolean;
}> {
  render() {
    const { name, data, isValid, select, checkbox } = this.props;

    return (
      <div>
        <div>{isValid ? name : null}</div>
        <div>{isValid ? data : null}</div>
        <div>{isValid ? select : null}</div>
        <div>{isValid ? checkbox : null}</div>
      </div>
    );
  }
}
