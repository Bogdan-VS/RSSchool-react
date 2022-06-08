import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Header } from '../Header';
import { AboutUs } from '../AboutUs';
import { MainPage } from '../MainPage';
import { Error } from '../Error';

const { wrapper } = styles;

export const App = () => {
  return (
    <div className={wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
