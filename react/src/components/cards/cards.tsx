import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card } from './Card';
import { Spinner } from '../Spinner';
import { useAppDispatch } from '../../store';
import { IState } from '../../store/type';
import { fetchCards } from '../../store/cardsSlice';
import { CharacterResults } from '../../services/type';

import styles from './Cards.module.scss';

const { wrapper } = styles;

export const Cards = () => {
  const {
    cardsCollection,
    pageNumber,
    searchProps: { value, male, female, genderless, unknown },
  } = useSelector((state: { cards: IState }) => state.cards);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCards({ genderless, male, female, unknown, value, pageNumber })
    );
  }, [genderless, male, female, unknown, value, pageNumber]);

  return (
    <div className={wrapper}>
      {cardsCollection ? (
        cardsCollection.map((item: CharacterResults) => {
          return <Card card={item} key={item.id} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};
