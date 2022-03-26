import { ChangeEvent, Component } from 'react';

import './search.css';

export default class Search extends Component {
  state = {
    label: '',
  };

  search = (e: ChangeEvent) => {
    this.setState({
      label: (e.target as HTMLInputElement).value,
    });
  };

  componentDidMount() {
    const label = localStorage.getItem('label');

    if (label) {
      const searchText = document.getElementById('search') as HTMLInputElement;
      searchText.value = label;
    }
  }

  componentWillUnmount() {
    const { label } = this.state;

    localStorage.setItem('label', label);
  }

  render() {
    return (
      <form action="search">
        <div className="search-wrapper">
          <input
            className="search-item"
            type="search"
            name="search"
            id="search"
            onChange={this.search}
          />
          <button className="search-btn">Search</button>
        </div>
      </form>
    );
  }
}
