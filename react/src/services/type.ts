export type Character = {
  info: CharacterInfo;
  results: CharacterResults[];
};
export type CharacterInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterResults = {
  created?: string;
  episode?: Episode;
  gender?: string;
  id: number;
  image: string;
  location?: Location;
  name: string;
  origin?: Origin;
  species: string;
  status?: string;
  type?: string;
  url?: string;
};

export type CharacterCard = {
  id?: number;
  image?: string;
  name?: string;
  species?: string;
};

export type Episode = {
  episode: string[];
};

export type Location = {
  name: string;
  url: string;
};

export type Origin = {
  name: string;
  url: string;
};
