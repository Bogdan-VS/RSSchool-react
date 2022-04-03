import { Component } from 'react';

export class Card extends Component<{
  name: string;
  data: string;
  isValid: boolean;
}> {
  render() {
    const { name, data, isValid } = this.props;

    return (
      <div>
        <div>{isValid ? name : null}</div>
        <div>{isValid ? data : null}</div>
      </div>
    );
  }
}
