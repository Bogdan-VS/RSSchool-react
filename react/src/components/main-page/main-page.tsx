import { Component } from 'react';
import Cards from '../cards';
import Search from '../search';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <Search />
        <Cards />
      </main>
    );
  }
}
