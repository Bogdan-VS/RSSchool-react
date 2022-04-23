import React, { useContext, useEffect, useReducer } from 'react';

import { CharacterResults } from '../../services/type';

import { IAction, IAppContext, IChildrenProps, IState } from './type';
import { GlobalState } from './enum';

const { label, loading, singleCard, closedSingleCard, data } = GlobalState;

const initialState = {
  label: '',
  cardsCollection: null,
  loading: true,
  singleCard: null,
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
    case label:
      return { ...state, label: action.value };
    case loading:
      return { ...state, loading: !state.loading };
    case singleCard:
      return { ...state, singleCard: action.card };
    case closedSingleCard:
      return { ...state, singleCard: null };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: IChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, {
    label: '',
    cardsCollection: null,
    loading: true,
    singleCard: null,
  });

  const renderCards = (cards: CharacterResults[]) =>
    dispatch({ type: data, cards });

  const getLabel = (value: string) => {
    dispatch({ type: label, value });
  };

  const changeLoading = () => dispatch({ type: loading });

  const renderSingleCard = (card: CharacterResults) =>
    dispatch({ type: singleCard, card });

  const closeSingleCard = () => dispatch({ type: closedSingleCard });

  return (
    <AppContext.Provider
      value={{
        state,
        renderCards,
        getLabel,
        changeLoading,
        renderSingleCard,
        closeSingleCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
