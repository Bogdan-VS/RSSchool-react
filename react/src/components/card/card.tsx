import { Component } from 'react';
import IData, { IItem } from '../../source/interface';

import styles from './Card.module.scss';

const { wrapper, img, textWrapper } = styles;

export class Card extends Component<IData> {
  render() {
    const { name, info, description, actors, image }: IItem = this.props
      .item as IItem;

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
