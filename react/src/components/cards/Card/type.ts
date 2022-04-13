import { CharacterResults } from '../../../services/type';

export type CardProps = {
  card: CardItem;
  onToggle: TypeOnToggle;
};

export type CardItem = {
  image: string;
  name: string;
  species: string;
  id: number;
};

export type TypeOnToggle = (card: CharacterResults) => void;
