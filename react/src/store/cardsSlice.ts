import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCorrectDataCards } from '../components/Cards/utils';
import { Api } from '../services/api';
import { Character, CharacterInfo, CharacterResults } from '../services/type';
import { FormFiles, ISearchProps, IState } from './type';

export const fetchCards = createAsyncThunk(
  'Cards/fetchCrds',
  async (
    payload: {
      value: string;
      pageNumber: number;
      male: string;
      female: string;
      genderless: string;
      unknown: string;
    },
    { dispatch, getState }
  ) => {
    Api.searchByCharacter(payload.value, payload.pageNumber).then(
      (body: Character) => {
        const correctdata: CharacterResults[] = getCorrectDataCards(
          body.results,
          payload.male,
          payload.female,
          payload.genderless,
          payload.unknown
        );

        dispatch(
          renderCards(correctdata.length === 0 ? body.results : correctdata)
        );
        dispatch(getInfo(body.info));

        console.log(getState());
      }
    );
  }
);

const cardsSlice = createSlice({
  name: 'Cards',
  initialState: {
    searchProps: {
      value: '',
      male: '',
      female: '',
      genderless: '',
      unknown: '',
    },
    pageNumber: 1,
    data: null,
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
  },
  reducers: {
    renderCards(state: IState, action: { payload: CharacterResults[] }) {
      state.cardsCollection = action.payload;
    },
    getSearchProps(state: IState, action: { payload: ISearchProps }) {
      state.searchProps = action.payload;
    },
    changeLoading(state: IState) {
      state.loading = !state.loading;
    },
    renderSingleCard(state: IState, action: { payload: CharacterResults }) {
      state.singleCard = action.payload;
    },
    closeSingleCard(state: IState) {
      state.singleCard = null;
    },
    getInfo(state: IState, action: { payload: CharacterInfo }) {
      state.info = action.payload;
    },
    getPageNumber(state: IState, action: { payload: number }) {
      state.pageNumber = action.payload;
    },
    renderPersonalCard(state: IState, action: { payload: FormFiles[] }) {
      state.personalDataCollection = action.payload;
    },
  },
});

export const {
  renderCards,
  getPageNumber,
  getInfo,
  closeSingleCard,
  renderSingleCard,
  changeLoading,
  getSearchProps,
  renderPersonalCard,
} = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;
