import { Component } from 'react';
import styles from './Cards.module.scss';
import { Card } from '../Card';
import { Character, CharacterResults } from '../../services/type';
import { Api } from '../../services/api';
import { Spinner } from '../Spinner';

const { wrapper } = styles;

type CardsState = {
  character: CharacterResults[] | null;
};

type CardsProps = {
  onToggle: (card: CharacterResults) => void;
  label: string;
};

export class Cards extends Component<CardsProps, CardsState> {
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

  componentDidUpdate(prevProps: CardsProps) {
    if (prevProps.label !== this.props.label) {
      Api.searchByCharacter(this.props.label).then((body: Character) => {
        this.setState({
          character: body.results,
        });
      });
    }
  }

  render() {
    const { character } = this.state;
    const { onToggle } = this.props;

    return (
      <div className={wrapper}>
        {character ? (
          character.map((item: CharacterResults) => {
            return <Card card={item} key={item.id} onToggle={onToggle} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
