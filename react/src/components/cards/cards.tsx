import { Component } from 'react';
import styles from './Cards.module.scss';
import { Card } from '../Card';
import { Character, CharacterResults } from '../../services/type';
import { Api } from '../../services/api';
import { CardItem } from '../Card/type';

const { wrapper } = styles;

type CardsState = {
  character: CharacterResults[] | null;
};

export class Cards extends Component<
  { onToggle(card: CharacterResults): void },
  CardsState
> {
  state: CardsState = {
    character: null,
  };

  componentDidMount() {
    Api.getAllCharacter().then((body: Character) => {
      this.setState({
        character: body.results,
      });
    });
  }

  render() {
    const { character } = this.state;
    const { onToggle } = this.props;

    return (
      <div className={wrapper}>
        {character
          ? character.map((item: CharacterResults) => {
              return <Card card={item} key={item.id} onToggle={onToggle} />;
            })
          : null}
      </div>
    );
  }
}
