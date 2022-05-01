import { useSelector } from 'react-redux';
import { IState } from '../../store/type';
import { Cards } from '../Cards';
import { Pagination } from '../Pagination';
import { Search } from '../Search';
import { SingleCard } from '../SingleCard/SingleCard';
import { Spinner } from '../Spinner';

export const MainPage = () => {
  const { loading, singleCard } = useSelector(
    (state: { cards: IState }) => state.cards
  );

  return (
    <main>
      <Search />
      <Cards />
      <Pagination />
      {singleCard && loading && <SingleCard />}
      {!loading && <Spinner />}
    </main>
  );
};
