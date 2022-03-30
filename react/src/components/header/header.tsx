import { Link } from 'react-router-dom';
import { Pages } from './enum';

import styles from './Header.module.scss';

const { nav, item } = styles;

export const Header = () => {
  return (
    <header>
      <nav className={nav}>
        <Link to={Pages.main} className={item}>
          Main page
        </Link>
        <Link to={Pages.aboutUs} className={item}>
          About us
        </Link>
        <Link to={Pages.error} className={item}>
          404
        </Link>
      </nav>
    </header>
  );
};
