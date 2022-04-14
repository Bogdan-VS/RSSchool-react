import { useState } from 'react';

import { CharacterResults } from '../../services/type';
import { Cards } from '../Cards';
import { Search } from '../Search';
import { SingleCard } from '../SingleCard/SingleCard';
import { Spinner } from '../Spinner';

export const MainPage = () => {
  const [singleCard, setSingleCard] = useState<CharacterResults | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [label, setLabel] = useState<string>('');

  const toggleSingleCard = (card: CharacterResults) => {
    setLoading(false);

    setTimeout(() => {
      setSingleCard(card);
      setLoading(true);
    }, 1000);
  };

  const closeSingleCard = () => setSingleCard(null);
  const search = (label: string) => setLabel(label);

  return (
    <main>
      <Search search={search} />
      <Cards onToggle={toggleSingleCard} label={label} />
      {singleCard && loading && (
        <SingleCard card={singleCard} close={closeSingleCard} />
      )}
      {!loading && <Spinner />}
    </main>
  );
};
