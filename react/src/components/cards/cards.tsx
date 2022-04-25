import { useEffect } from 'react';

import { Card } from './Card';
import { Character, CharacterResults } from '../../services/type';
import { Api } from '../../services/api';
import { Spinner } from '../Spinner';
import { useGlobalProps } from '../AppContext/AppContext';
import { getCorrectDataCards } from './utils';

import styles from './Cards.module.scss';

const { wrapper } = styles;

export const Cards = () => {
  const {
    renderCards,
    getInfo,
    state: {
      searchProps: { value, male, female, genderless, unknown },
      cardsCollection,
      pageNumber,
    },
  } = useGlobalProps();

  useEffect(() => {
    setTimeout(() => {
      Api.searchByCharacter(value, pageNumber).then((body: Character) => {
        const correctdata: CharacterResults[] = getCorrectDataCards(
          body.results,
          male,
          female,
          genderless,
          unknown
        );

        renderCards!(correctdata.length === 0 ? body.results : correctdata);
        getInfo!(body.info);
      });
    }, 1000);
  }, [value, male, female, genderless, unknown, pageNumber]);

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
