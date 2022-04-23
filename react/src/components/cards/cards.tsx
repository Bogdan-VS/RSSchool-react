import { useEffect } from 'react';
import styles from './Cards.module.scss';
import { Card } from './Card';
import { Character, CharacterResults } from '../../services/type';
import { Api } from '../../services/api';
import { Spinner } from '../Spinner';
import { useGlobalProps } from '../AppContext/AppContext';

const { wrapper } = styles;

export const Cards = () => {
  const {
    renderCards,
    state: { label, cardsCollection, loading },
    changeLoading,
  } = useGlobalProps();

  useEffect(() => {
    changeLoading!();

    setTimeout(() => {
      Api.searchByCharacter(label).then((body: Character) => {
        renderCards!(body.results);
        changeLoading!();
      });
    }, 1000);
  }, [label]);

  return (
    <div className={wrapper}>
      {cardsCollection && loading ? (
        cardsCollection.map((item: CharacterResults) => {
          return <Card card={item} key={item.id} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};
