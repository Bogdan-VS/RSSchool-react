import { useNavigate } from 'react-router-dom';

import style from './Card.module.scss';

const { wrapper, img, textWrapper } = style;

type CardItem = {
  image: string;
  name: string;
  species: string;
  id: number;
};

export const Card: React.FC<{ card: CardItem }> = ({ card }) => {
  const { name, image, species } = card;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  let navigate = useNavigate();

  return (
    <div
      className={wrapper}
      data-testid="card"
      onClick={() => {
        navigate(`/cards/${card.id}`);
      }}
    >
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
