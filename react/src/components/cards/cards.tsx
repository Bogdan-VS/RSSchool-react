import { Component } from 'react';

import data from '../../source/data';
import IData from '../../source/interface';
import ICards from './interface';
import './cards.css';

export default class Cards extends Component {
  state = {
    dataCards: data,
  };

  render() {
    const { dataCards }: ICards = this.state;

    const items = dataCards.map((item: IData, index: number) => {
      return (
        <div className="item-wrapper" key={index}>
          <div
            className="item-img"
            style={{
              background: `top 0 left 0 / 100% 100% url(${item.image})`,
            }}
          ></div>
          <div className="text-wrapper">
            <h4 className="item-title">{item.name}</h4>
            <p className="item-info">{item.info}</p>
            <p className="item-description">{item.description}</p>
            <p className="item-actor">{item.actors}</p>
          </div>
        </div>
      );
    });

    return <div className="cards-wrapper">{items}</div>;
  }
}
