import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Header } from '../Header';
import { AboutUs } from '../AboutUs';
import { MainPage } from '../MainPage';
import { Errors } from '../Error';
import { Form } from '../Form';
import { SingleCard } from '../SingleCard';

const { wrapper } = styles;

export const App = () => {
  return (
    <div className={wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Errors />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cards/:id" element={<SingleCard />} />
      </Routes>
    </div>
  );
};
