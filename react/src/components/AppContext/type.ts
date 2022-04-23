import { ReactNode } from 'react';
import { RoutesProps } from 'react-router-dom';
import { CharacterResults } from '../../services/type';

export type IAction =
  | { type: 'data'; cards: CharacterResults[] }
  | { type: 'label'; value: string }
  | { type: 'loading' }
  | { type: 'singleCard'; card: CharacterResults }
  | { type: 'closedSingleCard' };

export type IState = {
  label: string;
  cardsCollection: CharacterResults[] | null;
  loading: boolean;
  singleCard: CharacterResults | null;
};

export type IAppContext = {
  state: IState;
  renderCards?: (cards: CharacterResults[]) => void;
  getLabel?: (value: string) => void;
  changeLoading?: () => void;
  renderSingleCard?: (card: CharacterResults) => void;
  closeSingleCard?: () => void;
};

export type IChildrenProps = {
  children: {
    Header?: ReactNode;
    Routes?: ({ children, location }: RoutesProps) => React.ReactElement | null;
  };
};
