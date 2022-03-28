import { Component } from 'react';
import IData, { IItem } from '../../source/interface';

import './card.css';

export default class Card extends Component<IData> {
  render() {
    const { name, info, description, actors, image }: IItem = this.props.item as IItem;

    return (
      <div className="item-wrapper" data-testid="card">
        <div
          className="item-img"
          style={{
            background: `top 0 left 0 / 100% 100% url(${image})`,
          }}
        ></div>
        <div className="text-wrapper">
          <h4 className="item-title">{name}</h4>
          <p className="item-info">{info}</p>
          <p className="item-description">{description}</p>
          <p className="item-actor">{actors}</p>
        </div>
      </div>
    );
  }
}
