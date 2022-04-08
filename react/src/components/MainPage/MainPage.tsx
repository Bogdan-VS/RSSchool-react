import { Component } from 'react';
import { CharacterResults } from '../../services/type';
import { Cards } from '../Cards';
import { Search } from '../Search';
import { SingleCard } from '../SingleCard/SingleCard';
import { TypeMainPage } from './type';

export class MainPage extends Component<unknown, TypeMainPage> {
  state: TypeMainPage = {
    singleCard: null,
  };

  toggleSingleCard = (card: CharacterResults) => {
    this.setState({
      singleCard: card,
    });
  };

  closeSingleCard = () => {
    this.setState({
      singleCard: null,
    });
  };

  render() {
    const { singleCard } = this.state;

    return (
      <main>
        <Search />
        <Cards onToggle={this.toggleSingleCard} />
        {singleCard && (
          <SingleCard card={singleCard} close={this.closeSingleCard} />
        )}
      </main>
    );
  }
}
