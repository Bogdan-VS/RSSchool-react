import React, { useContext, useReducer } from 'react';

import { CharacterInfo, CharacterResults } from '../../services/type';

import {
  FormFiles,
  IAction,
  IAppContext,
  IChildrenProps,
  ISearchProps,
  IState,
} from './type';
import { GlobalState } from './enum';

const {
  searchProps,
  loading,
  singleCard,
  closedSingleCard,
  data,
  personalDataCollection,
  info,
  pageNumber,
} = GlobalState;

const initialState = {
  searchProps: {
    value: '',
    male: '',
    female: '',
    genderless: '',
    unknown: '',
  },
  pageNumber: 1,
  info: {
    pages: 0,
    count: 0,
    prev: null,
    next: null,
  },
  cardsCollection: null,
  loading: true,
  singleCard: null,
  personalDataCollection: [],
};

export const useGlobalProps = () => {
  return useContext(AppContext);
};

export const AppContext = React.createContext<IAppContext>({
  state: initialState,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case data:
      return { ...state, cardsCollection: action.cards };
    case info:
      return { ...state, info: action.infoData };
    case pageNumber:
      return { ...state, pageNumber: action.number };
    case searchProps:
      return { ...state, searchProps: action.props };
    case loading:
      return { ...state, loading: !state.loading };
    case singleCard:
      return { ...state, singleCard: action.card };
    case closedSingleCard:
      return { ...state, singleCard: null };
    case personalDataCollection:
      return { ...state, personalDataCollection: action.personalData };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: IChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, {
    searchProps: {
      value: '',
      male: '',
      female: '',
      genderless: '',
      unknown: '',
    },
    pageNumber: 1,
    info: {
      pages: 0,
      count: 0,
      prev: null,
      next: null,
    },
    cardsCollection: null,
    loading: true,
    singleCard: null,
    personalDataCollection: [],
  });

  const renderCards = (cards: CharacterResults[]) =>
    dispatch({ type: data, cards });

  const getSearchProps = (props: ISearchProps) => {
    dispatch({ type: searchProps, props });
  };

  const changeLoading = () => dispatch({ type: loading });

  const renderSingleCard = (card: CharacterResults) =>
    dispatch({ type: singleCard, card });

  const closeSingleCard = () => dispatch({ type: closedSingleCard });

  const renderPersonalCard = (personalData: FormFiles[]) =>
    dispatch({ type: personalDataCollection, personalData });

  const getInfo = (infoData: CharacterInfo) =>
    dispatch({ type: info, infoData });

  const getPageNumber = (number: number) =>
    dispatch({ type: pageNumber, number });

  return (
    <AppContext.Provider
      value={{
        state,
        renderCards,
        getSearchProps,
        changeLoading,
        renderSingleCard,
        closeSingleCard,
        renderPersonalCard,
        getInfo,
        getPageNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
