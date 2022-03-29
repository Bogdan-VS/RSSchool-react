import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import Header from '../header';
import AboutUs from '../about-us';
import MainPage from '../main-page';
import Errors from '../error';
import Form from '../form';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Errors />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    );
  }
}
