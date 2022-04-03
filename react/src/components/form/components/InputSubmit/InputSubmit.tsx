import React, { Component } from 'react';

import styles from './InputSubmit.module.scss';

const { wrapper } = styles;

export class InputSubmit extends Component<{
  onSubmit: React.RefObject<HTMLInputElement>;
}> {
  inputSubmitRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    this.props.onSubmit;
    const submit = this.inputSubmitRef.current;

    if (submit) {
      submit.setAttribute('disabled', 'disabled');
    }
  }

  render() {
    return (
      <div className={wrapper}>
        <input
          type="submit"
          value="Submit"
          id="form-submit"
          ref={this.inputSubmitRef}
        />
      </div>
    );
  }
}
