import { CharacterResults } from '../../services/type';

export type SingleCardProps = {
  card: CharacterResults | null;
  close: Close;
};

type Close = () => void;
