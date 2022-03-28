import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

import { IItem } from '../../source/interface';

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
