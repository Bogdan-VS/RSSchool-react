import styles from './SingleCard.module.scss';
import { CharacterResults } from '../../services/type';

const { item, overlay, cardContainer, closeBtn } = styles;

export type SingleCardProps = {
  card: CharacterResults;
  close: Close;
};

type Close = () => void;

export const SingleCard = ({ card, close }: SingleCardProps) => {
  const { name, status, species, gender, origin, image } = card;

  return (
    <div className={overlay} data-testid="overlay">
      <div className={cardContainer}>
        <button className={closeBtn} onClick={close}></button>
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
};
