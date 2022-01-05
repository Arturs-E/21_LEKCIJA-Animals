import React from 'react';
import './App.scss';
import {
  BrowserRouter, Routes, Route, HashRouter,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Translations from './pages/Translations/Translations';

const App = () => (
  // Use BrowserRouter for normal workflow
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/translations" element={<Translations />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
