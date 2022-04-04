import { render, screen } from '@testing-library/react';
import { Card } from './Card';

import { ICard } from '../../source/interface';

const testData: ICard = {
  name: 'name',
  info: 'info',
  description: 'description',
  actors: 'actors',
  image: 'image',
  id: 100,
};

const { name, info, description, actors } = testData;

describe('Card', () => {
  beforeEach(() => {
    render(<Card item={testData} />);
  });

  it('should renders name', () => {
    expect(screen.getByText(`${name}`)).toBeInTheDocument();
  });

  it('should renders info', () => {
    expect(screen.getByText(`${info}`)).toBeInTheDocument();
  });

  it('should renders description', () => {
    expect(screen.getByText(`${description}`)).toBeInTheDocument();
  });

  it('should renders actors', () => {
    expect(screen.getByText(`${actors}`)).toBeInTheDocument();
  });
});
