import { Component } from 'react';
import { SingleCardProps } from './type';

import styles from './SingleCard.module.scss';
import { CharacterResults } from '../../services/type';

const { item, overlay, cardContainer, close } = styles;

export class SingleCard extends Component<SingleCardProps> {
  render() {
    const { name, status, species, gender, origin, image } = this.props
      .card as CharacterResults;

    return (
      <div className={overlay}>
        <div className={cardContainer}>
          <div className={close} onClick={this.props.close}></div>
          <h3>Details</h3>
          <img src={image} alt="Avatar" />
          <div className={item}>{`Name: ${name}`}</div>
          <div className={item}>{`Status: ${status}`}</div>
          <div className={item}>{`Species: ${species}`}</div>
          <div className={item}>{`Gender: ${gender}`}</div>
          <div className={item}>{`Origin: ${origin?.name}`}</div>
        </div>
      </div>
    );
  }
}
