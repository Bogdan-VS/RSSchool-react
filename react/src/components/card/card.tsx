import { Component } from 'react';
import IItem from '../../source/interface';

import style from './Card.module.scss';

const { wrapper, img, textWrapper } = style;

export class Card extends Component<IItem> {
  render() {
    const { name, info, description, actors, image } = this.props.item;

    return (
      <div className={wrapper} data-testid="card">
        <div
          className={img}
          style={{
            background: `top 0 left 0 / 100% 100% url(${image})`,
          }}
        ></div>
        <div className={textWrapper}>
          <h4>{name}</h4>
          <p>{info}</p>
          <p>{description}</p>
          <p>{actors}</p>
        </div>
      </div>
    );
  }
}
