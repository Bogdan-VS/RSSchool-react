import { Component } from 'react';

import styles from './Card.module.scss';

const { card, avatar, cardItem } = styles;

export class Card extends Component<{
  name: string;
  data: string;
  select: string;
  checkbox: string;
  radio: string;
  file: string;
  isValid: boolean;
}> {
  render() {
    const { name, data, isValid, select, checkbox, radio, file } = this.props;

    return (
      <div className={card}>
        <img className={avatar} src={file} alt="Avatar" />
        <div className={cardItem}>{isValid ? `Your name: ${name}` : null}</div>
        <div className={cardItem}>
          {isValid ? `Your birthday: ${data}` : null}
        </div>
        <div className={cardItem}>
          {isValid ? `Country of residence: ${select}` : null}
        </div>
        <div className={cardItem}>{isValid ? checkbox : null}</div>
        <div className={cardItem}>{isValid ? `Gender: ${radio}` : null}</div>
      </div>
    );
  }
}
