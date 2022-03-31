import { Component } from 'react';

import styles from './Card.module.scss';

const { wrapper, img, textWrapper } = styles;

type CardProps = {
  name: string;
  info: string;
  description: string;
  actors: string;
  image: string;
  id: number;
};

export class Card extends Component<CardProps> {
  render() {
    const { name, info, description, actors, image } = this.props;

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
