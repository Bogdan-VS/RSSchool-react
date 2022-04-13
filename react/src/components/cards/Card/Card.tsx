import { CharacterResults } from '../../../services/type';

import style from './Card.module.scss';

const { wrapper, img, textWrapper } = style;

type CardItem = {
  image: string;
  name: string;
  species: string;
  id: number;
};

type TypeOnToggle = (card: CharacterResults) => void;

export const Card: React.FC<{ card: CardItem; onToggle: TypeOnToggle }> = ({
  card,
  onToggle,
}) => {
  const { name, image, species } = card;

  return (
    <div className={wrapper} data-testid="card" onClick={() => onToggle(card)}>
      <div
        className={img}
        style={{
          background: `top 0 left 0 / 100% 100% url(${image})`,
        }}
      ></div>
      <div className={textWrapper}>
        <h4>{name}</h4>
        <p>{species}</p>
      </div>
    </div>
  );
};
