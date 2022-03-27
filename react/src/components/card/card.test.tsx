import { render, screen } from '@testing-library/react';
import Card from './';

import data from '../../source/data';
import { IItem } from '../../source/interface';

// const { name, info, description, actors, image } = data[0];

const testData: IItem = {
  name: 'name',
  info: 'info',
  description: 'description',
  actors: 'actors',
  image: 'image',
};

describe('Card', () => {
  beforeEach(() => {
    render(<Card item={testData} />);
  });

  it('should renders name', () => {
    screen.debug();
    expect(screen.getByText(`${testData.name}`)).toBeInTheDocument();
  });

  it('should renders info', () => {
    expect(screen.getByText(`${testData.info}`)).toBeInTheDocument();
  });

  it('should renders description', () => {
    expect(screen.getByText(`${testData.description}`)).toBeInTheDocument();
  });

  it('should renders actors', () => {
    expect(screen.getByText(`${testData.actors}`)).toBeInTheDocument();
  });
});
