import { screen, render } from '@testing-library/react';
import { Cards } from './Cards';
import data from '../../source/data';

describe('Cards', () => {
  beforeEach(() => {
    render(<Cards />);
  });

  it('count cards', () => {
    expect(screen.getAllByTestId('card').length).toBe(data.length);
  });
});
