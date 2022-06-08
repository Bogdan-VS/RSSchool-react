import { Pages } from './enum';
import { Character } from './type';

export class Api {
  private static _baseLink = 'https://rickandmortyapi.com/api';

  static getTheOneApi = async (url: string) => {
    const res = await fetch(`${Api._baseLink}${url}`);

    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }

    return await res.json();
  };

  static getAllCharacter = async (): Promise<Character> => {
    return await Api.getTheOneApi(`${Pages.character}`);
  };

  static getCharacter = async (id: number) => {
    return await Api.getTheOneApi(`${Pages.character}/${id}`);
  };

  static searchByCharacter = async (name: string, page: number) => {
    return await Api.getTheOneApi(
      `${Pages.character}?page=${page}&name=${name}`
    );
  };
}
