import { Component } from 'react';

import './search.css';

export default class Search extends Component {
  render() {
    return (
      <form action="search">
        <div className="search-wrapper">
          <input className="search-item" type="search" name="search" id="search" />
          <button className="search-btn">Search</button>
        </div>
      </form>
    );
  }
}
