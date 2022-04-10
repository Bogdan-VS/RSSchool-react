import { CharacterResults } from '../../services/type';

export type TypeMainPage = {
  singleCard: CharacterResults | null;
  loading: boolean;
  label: string;
};
