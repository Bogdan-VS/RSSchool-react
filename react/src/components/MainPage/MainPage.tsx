import { useGlobalProps } from '../AppContext/AppContext';
import { Cards } from '../Cards';
import { Search } from '../Search';
import { SingleCard } from '../SingleCard/SingleCard';
import { Spinner } from '../Spinner';

export const MainPage = () => {
  const {
    state: { loading, singleCard },
  } = useGlobalProps();

  return (
    <main>
      <Search />
      <Cards />
      {singleCard && loading && <SingleCard />}
      {!loading && <Spinner />}
    </main>
  );
};
