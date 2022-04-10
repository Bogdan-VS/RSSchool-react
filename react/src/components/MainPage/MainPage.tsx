import { Component } from 'react';
import { CharacterResults } from '../../services/type';
import { Cards } from '../Cards';
import { Search } from '../Search';
import { SingleCard } from '../SingleCard/SingleCard';
import { Spinner } from '../Spinner';
import { TypeMainPage } from './type';

export class MainPage extends Component<unknown, TypeMainPage> {
  state: TypeMainPage = {
    singleCard: null,
    loading: true,
    label: '',
  };

  toggleSingleCard = (card: CharacterResults) => {
    this.setState({ loading: false });

    setTimeout(() => {
      this.setState({
        singleCard: card,
        loading: true,
      });
    }, 1000);
  };

  closeSingleCard = () => {
    this.setState({
      singleCard: null,
    });
  };

  search = (label: string) => {
    this.setState({ label });
  };

  render() {
    const { singleCard, label, loading } = this.state;
    console.log(loading);
    const spinner = !loading ? <Spinner /> : null;
    const content = loading ? (
      <SingleCard card={singleCard} close={this.closeSingleCard} />
    ) : null;

    return (
      <main>
        <Search search={this.search} />
        <Cards onToggle={this.toggleSingleCard} label={label} />
        {singleCard && content}
        {spinner}
      </main>
    );
  }
}
