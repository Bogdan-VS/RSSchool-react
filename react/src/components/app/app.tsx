import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Header } from '../Header';
import { AboutUs } from '../AboutUs';
import { MainPage } from '../MainPage';
import { Errors } from '../Error';
import { Form } from '../Form';
import { AppProvider } from '../AppContext';

const { wrapper } = styles;

export const App = () => {
  return (
    <div className={wrapper}>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Errors />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </AppProvider>
    </div>
  );
};
