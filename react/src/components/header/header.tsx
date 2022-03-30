import { Link } from 'react-router-dom';
import { Pages } from './enum';

import styles from './Header.module.scss';

const { nav, navItem } = styles;

export const Header = () => {
  return (
    <header>
      <nav className={nav}>
        <Link to={Pages.main} className={navItem}>
          Main page
        </Link>
        <Link to={Pages.aboutUs} className={navItem}>
          About us
        </Link>
        <Link to={Pages.error} className={navItem}>
          404
        </Link>
        <Link to={Pages.form} className={navItem}>
          Form
        </Link>
      </nav>
    </header>
  );
};
