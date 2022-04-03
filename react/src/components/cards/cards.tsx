import { Component } from 'react';
import data from '../../source/data';
import styles from './Cards.module.scss';
import { Card } from '../Card';
import { ICard } from '../../source/interface';

const { wrapper } = styles;

export class Cards extends Component {
  state = {
    dataCards: data,
  };

  render() {
    const { dataCards } = this.state;

    const items = dataCards.map((item: ICard) => {
      return <Card item={item} key={item.id} />;
    });

    return <div className={wrapper}>{items}</div>;
  }
}
