import { ReactNode } from 'react';
import { RoutesProps } from 'react-router-dom';
import { CharacterResults, CharacterInfo, Character } from '../services/type';

export type IAction =
  | { type: 'data'; payload: { cards: CharacterResults[] } }
  | { type: 'searchProps'; props: ISearchProps }
  | { type: 'loading' }
  | { type: 'singleCard'; card: CharacterResults }
  | { type: 'closedSingleCard' }
  | { type: 'personalDataCollection'; personalData: FormFiles[] }
  | { type: 'info'; infoData: CharacterInfo }
  | { type: 'pageNumber'; number: number };

export type IState = {
  searchProps: ISearchProps;
  cardsCollection: CharacterResults[] | null;
  info: IInfo;
  pageNumber: number;
  loading: boolean;
  singleCard: CharacterResults | null;
  personalDataCollection: FormFiles[];
  data: Character | null;
};

export type IInfo = {
  pages: number;
  count: number;
  prev: string | null;
  next: string | null;
};

export type ISearchProps = {
  value: string;
  male: string;
  female: string;
  genderless: string;
  unknown: string;
};

export type IAppContext = {
  state: IState;
  renderCards?: (cards: CharacterResults[]) => void;
  getSearchProps?: (props: ISearchProps) => void;
  changeLoading?: () => void;
  renderSingleCard?: (card: CharacterResults) => void;
  closeSingleCard?: () => void;
  renderPersonalCard?: (personData: FormFiles[]) => void;
  getInfo?: (infoData: CharacterInfo) => void;
  getPageNumber?: (number: number) => void;
};

export type IChildrenProps = {
  children: {
    Header?: ReactNode;
    Routes?: ({ children, location }: RoutesProps) => React.ReactElement | null;
  };
};

export type FormFiles = {
  firstname: string;
  date: string;
  country: string;
  newsLetter: string;
  gender: string;
  file?: FileList;
  fileUrl?: string;
};
