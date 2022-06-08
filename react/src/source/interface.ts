export default interface IItems {
  item: ICard;
}

export interface ICard {
  name: string;
  info: string;
  description: string;
  actors: string;
  image: string;
  id: number;
}
