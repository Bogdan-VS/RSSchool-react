import { Component } from 'react';

import data from '../../source/data';
import { IItem } from '../../source/interface';
import ICards from './interface';
import './cards.css';
import Card from '../card';

export default class Cards extends Component<ICards> {
  state = {
    dataCards: data,
  };

  render() {
    const { dataCards }: ICards = this.state;

    const items = dataCards.map((item: IItem) => {
      return <Card item={item} key={item.id} />;
    });

    return <div className="cards-wrapper">{items}</div>;
  }
}
