import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

import { IItem } from '../../source/interface';

const testData: IItem = {
  name: 'name',
  info: 'info',
  description: 'description',
  actors: 'actors',
  image: 'image',
  id: 100,
};

const { name, info, description, image, actors, id } = testData;

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        name={name}
        info={info}
        description={description}
        actors={actors}
        image={image}
        id={id}
      />
    );
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
