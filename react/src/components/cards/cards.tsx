import { Component } from 'react';

import data from '../../source/data';
import IData, { IItem } from '../../source/interface';
import ICards from './interface';
import './cards.css';
import Card from '../card';

export default class Cards extends Component {
  state = {
    dataCards: data,
  };

  render() {
    const { dataCards }: ICards = this.state;

    const items = dataCards.map((item: IItem, index: number) => {
      return <Card item={item} key={index} />;
    });

    return <div className="cards-wrapper">{items}</div>;
  }
}
