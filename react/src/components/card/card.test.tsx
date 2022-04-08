import { render, screen } from '@testing-library/react';
import { Card } from './Card';

import { ICard } from '../../source/interface';
import { CharacterResults } from '../../services/type';

const testData: CharacterResults = {
  name: 'name',
  image: 'image',
  species: 'species',
  id: 100,
};

const onToggle = (card: CharacterResults) => {
  console.log(card);
};

const { name, species } = testData;

describe('Card', () => {
  beforeEach(() => {
    render(<Card card={testData} onToggle={onToggle} />);
  });

  it('should renders name', () => {
    expect(screen.getByText(`${name}`)).toBeInTheDocument();
  });

  it('should renders species', () => {
    expect(screen.getByText(`${species}`)).toBeInTheDocument();
  });
});
