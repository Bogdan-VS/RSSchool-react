import { screen, render } from '@testing-library/react';

import { Cards } from './Cards';
import { CharacterResults } from '../../services/type';

const cardCollection: CharacterResults[] = [
  {
    image: 'image',
    species: 'species',
    name: 'name',
    id: 1,
  },
  {
    image: 'image',
    species: 'species',
    name: 'name',
    id: 1,
  },
];

jest.mock('../../services/api', () => ({
  Api: {
    searchByCharacter: () => {
      return new Promise((res) => res({ results: cardCollection }));
    },
  },
}));

const onToggle = jest.fn();

describe('Cards', () => {
  beforeEach(() => {
    render(<Cards label="" onToggle={onToggle} />);
  });

  it('count cards', () => {
    expect(screen.getAllByTestId('card').length).toBe(cardCollection.length);
  });
});
