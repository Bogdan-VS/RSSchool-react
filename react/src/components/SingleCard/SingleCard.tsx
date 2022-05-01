import styles from './SingleCard.module.scss';
import { CharacterResults } from '../../services/type';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store/type';

const { item, overlay, cardContainer, closeBtn } = styles;

export type SingleCardProps = {
  card: CharacterResults;
  close: Close;
};

type Close = () => void;

export const SingleCard = () => {
  const cardsCollection = useSelector(
    (state: { cards: IState }) => state.cards.cardsCollection
  );

  const [card, setCard] = useState<CharacterResults>();

  // eslint-disable-next-line prefer-const
  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const myCard: CharacterResults | undefined = cardsCollection?.find(
      (item) => item.id === +id!
    );

    if (myCard) {
      setCard(myCard);
    } else {
      return navigate('/');
    }
  }, [id]);

  if (!card) {
    return null;
  }

  const { name, status, species, gender, origin, image } = card!;

  return (
    <div className={overlay} data-testid="overlay">
      <div className={cardContainer}>
        <button className={closeBtn} onClick={() => navigate('/')}></button>
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
