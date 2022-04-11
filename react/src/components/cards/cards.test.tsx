import { screen, render } from '@testing-library/react';

import { Cards } from './Cards';
import { CharacterResults } from '../../services/type';

const item: CharacterResults = {
  image: 'image',
  species: 'species',
  name: 'name',
  id: 1,
};

describe('Cards', () => {
  beforeEach(() => {
    render(<Cards card={item} onToggle={onToggle} />);
  });

  it('count cards', () => {
    expect(screen.getAllByTestId('card').length).toBe(data.length);
  });
});
