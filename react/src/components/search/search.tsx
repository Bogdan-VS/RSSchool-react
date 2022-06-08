import React, { ChangeEvent, Component, FormEvent } from 'react';

import styles from './Search.module.scss';

const { wrapper, item, btn } = styles;

type SearchProps = {
  search: (label: string) => void;
};

export class Search extends Component<SearchProps, unknown> {
  state = {
    label: '',
  };

  refSearch: React.RefObject<HTMLInputElement>;

  constructor(props: SearchProps) {
    super(props);
    this.refSearch = React.createRef();
  }

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

  onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') {
      this.props.search(this.state.label);
    }
  };

  componentWillUnmount() {
    const { label } = this.state;

    localStorage.setItem('label', label);
  }

  render() {
    const { search } = this.props;

    return (
      <form action="search" onSubmit={(e: FormEvent) => e.preventDefault()}>
        <div className={wrapper}>
          <input
            className={item}
            type="search"
            name="search"
            id="search"
            onChange={this.search}
          />
          <button
            className={btn}
            onClick={() => search(this.state.label)}
            onKeyDown={() => this.onKeyDown}
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}
