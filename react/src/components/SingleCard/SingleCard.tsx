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
      <div className={overlay} data-testid="overlay">
        <div className={cardContainer}>
          <button className={close} onClick={this.props.close}></button>
          <h3>Details</h3>
          <img src={image} alt="Avatar" />
          <ul>
            <li className={item}>{`Name: ${name}`}</li>
            <li className={item}>{`Status: ${status}`}</li>
            <li className={item}>{`Species: ${species}`}</li>
            <li className={item}>{`Gender: ${gender}`}</li>
            <li className={item}>{`Origin: ${origin?.name}`}</li>
          </ul>
        </div>
      </div>
    );
  }
}
