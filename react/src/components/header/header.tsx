import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from './enum';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="header-nav">
          <Link to={Pages.main} className="nav-item">
            Main page
          </Link>
          <Link to={Pages.aboutUs} className="nav-item">
            About us
          </Link>
          <Link to={Pages.error} className="nav-item">
            404
          </Link>
        </nav>
      </header>
    );
  }
}
