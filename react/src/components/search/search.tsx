import React, { ChangeEvent, Component } from 'react';

import styles from './Search.module.scss';

const { wrapper, item, btn } = styles;

export class Search extends Component {
  state = {
    label: '',
  };

  static searchInput = React.createRef<HTMLInputElement>();

  search = (e: ChangeEvent) => {
    this.setState({
      label: (e.target as HTMLInputElement).value,
    });
  };

  componentDidMount() {
    const label = localStorage.getItem('label');
    const searchText = Search.searchInput.current;

    if (label && searchText) {
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
        <div className={wrapper}>
          <input
            className={item}
            type="search"
            name="search"
            id="search"
            onChange={this.search}
            ref={Search.searchInput}
          />
          <button className={btn}>Search</button>
        </div>
      </form>
    );
  }
}
