import { Component } from 'react';

import style from './Card.module.scss';

import { CardProps } from './type';

const { wrapper, img, textWrapper } = style;

export class Card extends Component<CardProps, unknown> {
  render() {
    const { name, image, species } = this.props.card;
    const { onToggle } = this.props;

    return (
      <div
        className={wrapper}
        data-testid="card"
        onClick={() => onToggle(this.props.card)}
      >
        <div
          className={img}
          style={{
            background: `top 0 left 0 / 100% 100% url(${image})`,
          }}
        ></div>
        <div className={textWrapper}>
          <h4>{name}</h4>
          <p>{species}</p>
        </div>
      </div>
    );
  }
}
