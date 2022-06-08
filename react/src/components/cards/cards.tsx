import { useEffect, useState } from 'react';
import styles from './Cards.module.scss';
import { Card } from './Card';
import { Character, CharacterResults } from '../../services/type';
import { Api } from '../../services/api';
import { Spinner } from '../Spinner';

const { wrapper } = styles;

type CardsProps = {
  onToggle: (card: CharacterResults) => void;
  label: string;
};

export const Cards = ({ onToggle, label }: CardsProps) => {
  const [character, setCharacter] = useState<CharacterResults[] | null>(null);

  useEffect(() => {
    Api.searchByCharacter(label).then((body: Character) => {
      setCharacter(body.results);
    });
  }, [label]);

  return (
    <div className={wrapper}>
      {character ? (
        character.map((item: CharacterResults) => {
          return <Card card={item} key={item.id} onToggle={onToggle} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};
