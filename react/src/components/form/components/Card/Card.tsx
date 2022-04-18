import styles from './Card.module.scss';

const { card, avatar, cardItem } = styles;

type CardProps = {
  firstname: string;
  date: string;
  country: string;
  newsLetter: string;
  gender: string;
  fileUrl?: string;
};

export const Card: React.FC<CardProps> = ({
  firstname,
  date,
  country,
  newsLetter,
  gender,
  fileUrl,
}) => {
  return (
    <div className={card}>
      <img className={avatar} src={fileUrl} alt="Avatar" />
      <div className={cardItem}>{`Your name: ${firstname}`}</div>
      <div className={cardItem}>{`Your birthday: ${date}`}</div>
      <div className={cardItem}>{`Country of residence: ${country}`}</div>
      <div className={cardItem}>{newsLetter}</div>
      <div className={cardItem}>{`Gender: ${gender}`}</div>
    </div>
  );
};
